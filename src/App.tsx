import { useEffect, useState } from "react";
import { Studycontents } from "./contents/Studycontents";
import { supabase } from "./supabaseClient";

export type RecordType = {
  id: string;
  title: string;
  time: number;
};

function App() {
  const [error, setError] = useState("");
  const [records, setRecords] = useState<RecordType[]>([]);
  const [totaltime, setTotaltime] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchrRecords = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("study-record").select("*");
      if (error) {
        console.log(error);
        setError("データの取得に失敗しました");
      } else {
        setRecords(data || []);
        const total = (data || []).reduce(
          (sum, rec) => sum + (rec.time || 0),
          0
        );
        setTotaltime(total);
      }
      setLoading(false);
    };
    fetchrRecords();
  }, []);

  const addRecord = async (data: { title: string; time: number }) => {
    if (!data.title || !data.time) {
      setError("入力されていない項目があります。");
      return;
    }

    const { data: newData, error: insertError } = await supabase
      .from("study-record")
      .insert([{ title: data.title, time: data.time }])
      .select();

    if (insertError) {
      console.log(insertError);
      setError("データの登録に失敗しました。");
    } else {
      setRecords([...records, newData[0]]);
      setTotaltime(totaltime + data.time);
      setError("");
    }
  };

  // レコード削除
  const deleteRecord = async (id: string) => {
    const { error } = await supabase.from("study-record").delete().eq("id", id);
    if (error) {
      console.log(error);
      setError("データの削除に失敗しました。");
    } else {
      setRecords(records.filter((rec) => rec.id !== id));
    }
  };

  return (
    <div>
      {loading ? (
        <p>データー取得中・・・</p>
      ) : (
        <div>
          <h1
            style={{
              position: "fixed",
              top: 10,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            シン・学習記録アプリ
          </h1>
          <Studycontents
            records={records}
            deleteButton={deleteRecord}
            addRecord={addRecord}
          />
          {error}
        </div>
      )}
    </div>
  );
}

export default App;
