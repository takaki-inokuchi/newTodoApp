// import {
//   Button,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   useDisclosure,
// } from "@chakra-ui/react";

// type InputstudyProps = {
//   learningtext: string;
//   learningtime: number;
//   onChangetext: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onChangetime: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   registerButton: () => void;
// };

// export const Inputstudy: React.FC<InputstudyProps> = (props) => {
//   const {
//     learningtext,
//     learningtime,
//     onChangetext,
//     onChangetime,
//     registerButton,
//   } = props;

//   const { isOpen, onClose, onOpen } = useDisclosure();
//   return (
//     <div>
//       <Button style={{
//     position: "fixed",
//     top: 70,
//     display: "flex",
//     justifyContent: "center",
//     left: "56%",
//     transform: "translateX(-50%)",
//   }} colorScheme="teal" onClick={onOpen}>
//         新規登録
//       </Button>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>学習記録入力</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <p>
//               学習内容
//               <input value={learningtext} onChange={onChangetext} />
//             </p>
//             <p>
//               学習時間
//               <input value={learningtime} onChange={onChangetime} />
//               時間
//             </p>
//             <p>入力されている学習：{learningtext}</p>
//             <p>入力されている学習時間：{learningtime}時間</p>
//           </ModalBody>
//           <ModalFooter>
//             <Button
//               onClick={() => {
//                 registerButton();
//                 onClose();
//               }}
//             >
//               登録
//             </Button>
//             <Button variant="ghost" onClick={onClose}>
//               キャンセル
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };
