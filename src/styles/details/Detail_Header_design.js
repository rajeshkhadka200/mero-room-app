//header css
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  //arrow
  arrow: {
    position: "absolute",
    top: 15,
    left: 15,
    height: 35,
    width: 35,
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.52)",
    borderRadius: 500,
    textAlign: "center",
    lineHeight: 35,
  },
  indi_wrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.52)",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    zIndex: 100,
    top: 215,
    alignSelf: "center",
  },
  indicator: {
    height: 6,
    width: 6,
    borderRadius: 500,
    marginHorizontal: 3,
  },
  lower_wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  small_info_flex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  price: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "500",
  },
  address: {
    color: "rgba(0, 0, 0, 0.63)",
    fontFamily: "400",
  },
  small_right: {},

  // icons wrapper starts
  icon_wrapper: {
    marginVertical: 25,
    minHeight: 84,
    width: "100%",
    height: "auto",
    backgroundColor: "#dfdfdf",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actual_icon: {
    height: 60,
    width: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  icon_text: {
    color: "rgba(0, 0, 0, 0.49)",
    textAlign: "center",
    marginTop: 3,
    fontFamily: "300",
  },
  //header description
  header_con: {
    // marginVertical: 20,
  },
  desc_header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_text: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontFamily: "500",
  },
  header_status: {
    marginTop: -8,
    borderWidth: 1.5,
    borderColor: "rgba(234, 156, 15, 1)",
    borderRadius: 200,
    paddingHorizontal: 20,
    height: 25,
    lineHeight: 25,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 11,
    fontFamily: "400",
  },
  desc_para: {
    color: "rgba(0, 0, 0, 0.63)",
    marginVertical: 10,
    lineHeight: 22,
    fontFamily: "400",
  },
  // button wrappwe
  btn_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  btn_apply: {
    flex: 2,
    paddingVertical: 10,
    width: "80%",
    backgroundColor: "#5B628F",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_left: {
    borderWidth: 1.5,
    borderColor: "#5B628F",
    marginLeft: 5,
    width: "18%",
    backgroundColor: "transparent",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
