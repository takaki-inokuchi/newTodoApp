import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  List,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RecordType } from "../App";

type FormValues = {
  title: string;
  time: number;
};

type StudyContensProps = {
  records: RecordType[];
  deleteButton: (id: string) => void;
  addRecord: (data: FormValues) => void;
};

export const Studycontents: React.FC<StudyContensProps> = ({
  records,
  deleteButton,
  addRecord,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addRecord(data);
    reset();
    onClose();
  };

  return (
    <Box width="90%" maxW="500px" mx="auto" mt={8}>
      <Button colorScheme="teal" mb={4} onClick={onOpen}>
        新規登録
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>学習内容を登録</ModalHeader>
          <ModalBody>
            <Box as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl mb={2} isInvalid={!!errors.title}>
                <FormLabel>学習内容</FormLabel>
                <Input
                  placeholder="学習内容を入力"
                  {...register("title", { required: "内容の入力は必須です" })}
                />
                <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
              </FormControl>

              <FormControl mb={2} isInvalid={!!errors.time}>
                <FormLabel>学習時間</FormLabel>
                <Input
                  type="number"
                  placeholder="学習時間を入力"
                  {...register("time", {
                    required: "時間の入力は必須です",
                    min: { value: 1, message: "1時間以上" },
                  })}
                />
                <FormErrorMessage>{errors.time?.message}</FormErrorMessage>
              </FormControl>

              <ModalFooter p={0} mt={2}>
                <Button type="submit" colorScheme="red" mr={2}>
                  登録
                </Button>
                <Button
                  onClick={() => {
                    reset();
                    onClose();
                  }}
                >
                  キャンセル
                </Button>
              </ModalFooter>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Grid
        templateColumns="1fr 1fr auto"
        alignItems="start"
        bg="gray.100"
        p={2}
        fontWeight="bold"
        borderBottom="1px solid gray"
      >
        <Text>学習内容</Text>
        <Text>学習時間</Text>
        <Text>操作</Text>
      </Grid>

      {/* リスト */}
      <List>
        {records.map((record) => (
          <Grid
            key={record.id}
            templateColumns="1fr 1fr auto"
            alignItems="start"
            bg="white"
            p={2}
            borderRadius="md"
            boxShadow="sm"
            mb={2}
          >
            <Text>{record.title}</Text>
            <Text>{record.time}時間</Text>
            <Button
              size="xs"
              colorScheme="red"
              onClick={() => deleteButton(record.id)}
            >
              削除
            </Button>
          </Grid>
        ))}
      </List>
    </Box>
  );
};
