import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  headerWrapper:{
    paddingHorizontal:20,
    paddingVertical:20
  },
  headerCon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerIcon: {
    alignItems:"center",
    justifyContent:"center",
    width:60,
    height:60,
    backgroundColor: "#DFDFDF",
    opacity: 20,
    borderRadius: 15,
  },
  searchCon: {
    flex:1,
    justifyContent:"space-between",
    marginTop: 20,
    maxWidth: "100%",
    // borderWidth:1
  },
  searchText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 3,
  },
  searchWrapper:{
    marginTop:10,
    flex:1,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center"
  },
  searchBar: {
    flex:2,
    maxWidth: "85%",
    backgroundColor: "#E5E5E5",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    fontSize: 17,
  },
  searchBtn:{
    height:55,
    maxWidth:"15%",
    backgroundColor:"#5B628F",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
  },
  filterCon:{
    marginTop:25,
    marginLeft:3,
  },
  filterText:{
    fontSize:17,
    fontWeight:"600",
  },
  district:{
    marginTop:10,
    maxWidth:"auto",
    minWidth:150,
    paddingVertical:10,
    paddingHorizontal:10,
    backgroundColor:"#E4E4E4",
    alignItems:"center",
    borderRadius:10,
    marginRight:10
  },
  disText:{
    fontSize:18,
    fontWeight:"200"
  },
  disWrapper:{
    flexDirection:"row"
  }
});
