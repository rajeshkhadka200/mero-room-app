import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cmt_wrapper: {
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  cmt_header_text: {
    fontSize: 18,
    fontFamily: "500",
    paddingBottom: 10,
  },
  // input
  inp_wrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 500,
  },
  input: {
    width: "85%",
    paddingHorizontal: 5,
    paddingVertical: 8,
    fontFamily: "400",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.49)",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },

  send_btn_con: {
    justifyContent:"center",
    width: "15%",
    backgroundColor: "#5B628F",
    height: 45,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  send_btn:{
    alignSelf:"center",
  }
});
