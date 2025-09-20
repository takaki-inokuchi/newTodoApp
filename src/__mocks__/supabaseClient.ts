export const supabase = {
  from: jest.fn(() => ({
    insert: jest.fn(() => ({ data: [{ id: "1", title: "勉強", time: 1 }], error: null })),
    select: jest.fn(() => ({ data: [{ id: "1", title: "勉強", time: 1 }], error: null })),
    delete: jest.fn(() => ({ data: [], error: null })),
  })),
};