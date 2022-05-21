import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 15,
    height: "100%",
  },
  notif_con: {
    marginTop: 10,
    borderRadius: 7,
    borderLeftColor: "#5B628F",
    borderLeftWidth: 5,
    backgroundColor: "#efefef",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  text_con: {
    flex: 1,
    padding: 2,
  },
  img: {
    alignSelf: "flex-start",
    width: 35,
    height: 35,
    borderRadius: 17,
    marginRight: 15,
  },
  t1: {
    fontFamily: "500",
    fontSize: 13,
    color: "grey",
  },
  t2: {
    fontFamily: "400",
    fontSize: 16,
  },
});
