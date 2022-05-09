import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 25,
  },
  card: {
    elevation: 1,
    flex: 1 / 3,
    flexDirection: "row",
  },
  left_side: {
    flex: 1 / 2,
  },
  img: {
    flex: 1,
    width: "100%",
    height: 100,
    borderRadius: 5,
    resizeMode: "cover",
  },
  right_side: {
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "flex-end",
    flex: 1 / 2,
    // backgroundColor: "pink",
  },
  content: {
    marginLeft: 10,
  },
  address: {
    fontFamily: "400",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
  },
  price: {
    color: "rgba(0, 0, 0, 0.63)",
  },
  btn_grp: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#5B628F",
    width: "80%",
    flex: 2,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "500",
  },
  dlt: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#5B628F",
    borderRadius: 5,
    width: "20%",
    textAlign: "center",
    height: 34,
    lineHeight: 34,
    marginLeft: 4,
  },
});
