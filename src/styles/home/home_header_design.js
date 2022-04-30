import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerCon: {
    alignItems: "center",
    marginLeft: 3,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "500",
  },
  header_text: {
    marginLeft: 3,
  },
  header_bold_text: {
    marginTop: 10,
  },
  upper_bold_text: {
    fontSize: 40,
    fontFamily: "600",
  },
  lower_bolder_text: {
    fontSize: 40,
    fontFamily: "600",
    marginTop: -20,
  },
  lower_text_small: {
    fontFamily: "400",
    color: "rgba(0, 0, 0, 0.63)",
  },
  searchWrapper: {
    marginTop: 25,
    flex: 1,
    flexDirection: "column",
  },
  actual_search: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  searchBar: {
    flex: 2,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.54)",
    maxWidth: "85%",
    paddingVertical: 9.5,
    paddingHorizontal: 15,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    fontSize: 15,
    fontFamily: "300",
  },
  searchBtn: {
    height: 49,
    maxWidth: "15%",
    backgroundColor: "#5B628F",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
  },
  filterCon: {
    marginTop: 25,
    marginLeft: 3,
  },
  filterText: {
    fontSize: 17,
    fontFamily: "400",
    color: "rgba(0, 0, 0, 1)",
  },
  district: {
    marginTop: 10,
    maxWidth: "auto",
    minWidth: 150,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#E4E4E4",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 10,
  },
  disText: {
    fontSize: 14,
    fontFamily: "300",
  },
  disWrapper: {
    flexDirection: "row",
  },
});
