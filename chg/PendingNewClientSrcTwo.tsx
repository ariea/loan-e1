import React from "react";
import { Container, Row, Col } from "reactstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import icarrow from "../assets/images/ic-arrows@2x.png";
import { Link } from "react-router-dom";

const Styles = {
  BgBodyColor: {
    background: "#fff",
    padding: "25px",
  },
  SpanTextStyle: {
    fontSize: "21px",
  },
};

const dataTables2 = [
  {
    id: "1",col1: "שם העסק",col2: "ח.פ. / עוסק",col3: " איש קשר",col4: "תפקיד",col5: "מס' טלפון",col6: " מס' טלפון סלולרי",col7: " מייל  ",col8: " תאריך הרשמה", },
  {
    id: "2",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},
  {
    id: "3",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},
  {
    id: "4",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},
  {
    id: "5",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},

  {
    id: "6",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},
  {
    id: "7",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},
  {
    id: "8",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},
  {
    id: "9",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},
  {
    id: "10",col1: "123456",col2: "קפיטל פאונדי...",col3: " 12345678",col4: "1,652 ₪",col5: "6/6/22 "},
  { id: "11", col1: "סה״כ", col2: "", col3: " ", col4: "101,652 ₪", col5: " " },
 
];
const PendingNewClientSrcTwo = () => {
  return (
    <>
      <div className="BlockBgColor p-3">
        <Container fluid className="bg-white p-3">
          <div>
            <Row className="child-container">
              <Col className="d-flex align-items-center mb-3">
                <p className="displayCenterProp smalldiv-no Txt-Color">5</p>
                <p className="DisplayContentText primary-txt">
                  לקוחות חדשים ממתינים לאישור -{" "}
                  <span style={Styles.SpanTextStyle}>הרשימה המלאה
                  </span>
                </p>
              </Col>
            </Row>
          </div>
          <Paper className="TableBlockStyle">
            <TableContainer
              sx={{
                maxHeight: 700,
                "&::-webkit-scrollbar": {
                  width: 5,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#f1f5fa",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#5294FB",
                  borderRadius: 2,
                },
              }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className="clintinvo-heading">
                      שם העסק
                    </TableCell>
                    <TableCell align="center" className="clintinvo-heading">
                      ח.פ. / מס׳ עוסק
                    </TableCell>
                    <TableCell align="center" className="clintinvo-heading">
                      איש קשר
                    </TableCell>
                    <TableCell align="center" className="clintinvo-heading">
                      תפקיד
                    </TableCell>
                    <TableCell align="center" className="clintinvo-heading">
                      מס׳ טלפון
                    </TableCell>
                    <TableCell align="center" className="clintinvo-heading">
                      מס׳ טלפון סלולרי
                    </TableCell>
                    <TableCell align="center" className="clintinvo-heading">
                      מייל
                    </TableCell>
                    <TableCell align="center" className="clintinvo-heading">
                      תאריך בקשה לרישום
                    </TableCell>
                    <TableCell
                      align="center"
                      className="clintinvo-heading"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="ListpendingTable">
        {dataTables2?.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="StaticWidthStyle">{row.col1}</TableCell>
            <TableCell className="StaticWidthStyle">{row.col2}</TableCell>
            <TableCell className="StaticWidthStyle">{row.col3}</TableCell>
            <TableCell className="StaticWidthStyle">{row.col4}</TableCell>
            <TableCell className="StaticWidthStyle">{row.col5}</TableCell>
            <TableCell className="StaticWidthStyle">{row.col6}</TableCell>
            <TableCell className="StaticWidthStyle">{row.col7}</TableCell>
            <TableCell className="StaticWidthStyle">{row.col8}</TableCell>
            <TableCell style={{ width: "10px" }}>
              <Link to="/pending-client">
                <img className="right-arrow" src={icarrow} alt="" />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default PendingNewClientSrcTwo;
