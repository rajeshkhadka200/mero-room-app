import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  single_cmt_wrapper_outer: {
    marginVertical: 20,
  },
  header_text: {
    fontFamily: "500",
  },
  flex_cmt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#efefef",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 10,
  },

  avatar: {
    borderColor: "#2374E1",
    borderWidth: 1.5,
    height: 35,
    width: 35,
    borderRadius: 500,
    alignSelf: "center",
  },
  right_side: {
    flexDirection: "column",
    paddingLeft: 12,
    flex: 1,
  },
  username: {
    fontFamily: "500",
  },
  cmt_txt: {
    fontFamily: "400",
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.63)",
  },
});
