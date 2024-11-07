import arrow from "../assets/images/ic-arrows.png";
import user from "../assets/images/user.png";
import plus from "../assets/images/ic-plus.png";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import icsee from "../assets/images/ic-see-copy.png";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { SuperUserDashboardAPI } from '../service'
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const dataTables = [
    {
      id: "1",
      num: "276",
      numText: "נפדו השבוע",
      col1: "6/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "#f1f5fa",
      circleBg: "#5fc036",
    },
    {
      id: "2",
      num: "",
      numText: "נפדו השבוע ",
      col1: "7/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "",
      circleBg: "",
    },
    {
      id: "3",
      num: "",
      numText: "נפדו השבוע ",
      col1: "9/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "#f1f5fa",
      circleBg: "",
    },
    {
      id: "1",
      num: "210",
      numText: "פתוחות לפרעון באיחור ",
      col1: "6/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "#f1f5fa",
      circleBg: "#df281b",
    },
    {
      id: "2",
      num: "",
      numText: "פתוחות לפרעון באיחור ",
      col1: "7/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "",
      circleBg: "",
    },
    {
      id: "3",
      num: "",
      numText: "פתוחות לפרעון באיחור ",
      col1: "9/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "#f1f5fa",
      circleBg: "",
    },
    {
      id: "1",
      num: "593",
      numText: "פתוחות לפרעון עתידי ",
      col1: "6/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "#f1f5fa",
      circleBg: "#37cbc7",
    },
    {
      id: "2",
      num: "",
      numText: "פתוחות לפרעון עתידי ",
      col1: "7/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "",
      circleBg: "",
    },
    {
      id: "3",
      num: "",
      numText: "מחכות למימון",
      col1: "6/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "#f1f5fa",
      circleBg: "",
    },
    {
      id: "1",
      num: "4",
      numText: " בטיפול משפטי ",
      col1: "6/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "#f1f5fa",
      circleBg: "#000",
    },
    {
      id: "2",
      num: "",
      numText: "מחכות למימון",
      col1: "6/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "",
      circleBg: "",
    },
    {
      id: "3",
      num: "",
      numText: "מחכות למימון",
      col1: "6/6/22",
      col2: "123456",
      col3: "קפיטל פאונדינג קרופ",
      col4: "1,652 ₪",
      background: "#f1f5fa",
      circleBg: "",
    },
  ];

  let Home_Data_container = {
    clientsWaitForFinance: 16,
    invoiceWaitForUnderwriting: 42,
    newClientsToAprove: 51,
    newClientsToAproveKnowYourKlientData: 218,
  };

  const openPage = () => {
    navigate("/newPage");
  };
  useEffect(() => {
    getDashboardFunc({ sU: "", sP: "" });
  }, []);

  const getDashboardFunc = async (data: any) => {
    try {
      let res = await SuperUserDashboardAPI(data?.invoiceIDinSysem);
      if (res?.data !== '') toast.success("You are Authorized");
      else toast.error("You are Unauthorized")
    } catch (e) {
      toast.error("You are Unauthorized")
    }
  }
  return (
    <>
      <div
        className="displayCenterProp BlockBgColor p-4"
        style={{ height: "100% " }}>
        <div className="container-fluid main-container mt-1">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Link to="/pending-clientsrc">
                <div className="smallCard">
                  <div className="profileAvatar">
                    {Home_Data_container?.clientsWaitForFinance}{" "}
                  </div>
                  <p className="text"> לקוחות חדשים ממתינים לאישור </p>
                  <Button variant="link">
                    {" "}
                    <img src={arrow} />
                  </Button>
                </div>
              </Link>
              <Link to="/approveclientinvoice">
                <div className="smallCard">
                  <div className="profileAvatar">
                    {Home_Data_container?.invoiceWaitForUnderwriting}{" "}
                  </div>
                  <p className="text"> חשבוניות הממתינות לחיתום </p>
                  <Button variant="link">
                    <img src={arrow} />
                  </Button>
                </div>
              </Link>
              <Link to="/pendinginvoice">
                <div className="smallCard">
                  <div className="profileAvatar">
                    {Home_Data_container?.newClientsToAprove}{" "}
                  </div>
                  <p className="text"> לקוחות הממתינים למימון </p>
                  <Button variant="link">
                    <img src={arrow} />
                  </Button>
                </div>
              </Link>
              <div className=" smallCard-new">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}>
                  <Link to="/clientlist">
                    <div className="d-flex align-items-center">
                      <div className="user mt-1">
                        <img src={user} />
                      </div>
                      <p className="text"> רשימת לקוחות</p>
                      <Button variant="link">
                        <img src={arrow} />
                      </Button>
                    </div>
                  </Link>
                  <Link to="/clientnew-card">
                    <div className="user mt-1">
                      <img src={plus} />
                    </div>
                  </Link>
                </div>
                <p className="danger-text">
                  * {Home_Data_container?.newClientsToAproveKnowYourKlientData}{" "}
                  לקוחות ממתינים לעדכון ״הכר את הלקוח״
                </p>
              </div>

              <div className="  smallCard-new">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}>
                  <Link to="/withdraw">
                    <div className="d-flex align-items-center">
                      <div className="user mt-1">
                        <img src={user} />
                      </div>
                      <p className="text"> רשימת מושכים</p>
                      <Button variant="link">
                        <img src={arrow} />
                      </Button>
                    </div>
                  </Link>

                  <Link to="/moshec-card">
                    <div className="user mt-1">
                      <img src={plus} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 ">
              <div className="p-2 bg-white" style={{ background: "#fff" }}>
                <Table responsive className="clientTable">
                  <thead>
                    <tr>
                      <th className="clintinvo-heading">חשבוניות</th>
                      <th className="clintinvo-heading">תאריך פרעון</th>
                      <th className="clintinvo-heading">מספר חש׳</th>
                      <th className="clintinvo-heading">מושך</th>
                      <th className="clintinvo-heading">סכום</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTables?.map((i: any) => {
                      return (
                        <>
                          <tr key={i.id}>
                            {i.num && (
                              <td
                                rowSpan={3}
                                className="rowdata_1 StaticWidthStyle"
                                style={
                                  i.num && {
                                    background: i.background,
                                    borderTop: "30px solid  #fff",
                                  }
                                }>
                                <p
                                  className="tabrow-data"
                                  style={{ background: i?.circleBg }}>
                                  {i.num}
                                </p>
                                <p className="text primary-txt secondary-txt ">
                                  {i.numText}{" "}
                                </p>
                              </td>
                            )}
                            <td
                              className="second-table StaticWidthStyle"
                              style={
                                i.num
                                  ? {
                                    borderTop: "30px solid  #fff",
                                    background: i.background,
                                  }
                                  : { background: i.background }
                              }>
                              {i.col1}
                            </td>
                            <td
                              className="second-table StaticWidthStyle"
                              style={
                                i.num
                                  ? {
                                    borderTop: "30px solid  #fff",
                                    background: i.background,
                                  }
                                  : { background: i.background }
                              }>
                              {i.col3}
                            </td>
                            <td
                              className="second-table StaticWidthStyle"
                              style={
                                i.num
                                  ? {
                                    borderTop: "30px solid  #fff",
                                    background: i.background,
                                  }
                                  : { background: i.background }
                              }>
                              {i.col3}
                            </td>
                            <td
                              className="second-table StaticWidthStyle"
                              style={
                                i.num
                                  ? {
                                    borderTop: "30px solid  #fff",
                                    background: i.background,
                                  }
                                  : { background: i.background }
                              }>
                              {i.col4}
                            </td>
                            <td
                              className="second-table "
                              style={
                                i.num
                                  ? {
                                    borderTop: "30px solid  #fff",
                                    background: i.background,
                                  }
                                  : { background: i.background }
                              }>
                              <img className=" eye-img" src={icsee} alt="" />
                            </td>
                          </tr>
                        </>
                      );
                    })}

                    {/* <tr>
                      <td className='text primary-txt secondary-txt '>6/6/22</td>
                      <td className='text primary-txt secondary-txt '>102-5687</td>
                      <td className='text primary-txt secondary-txt '>תנובה בע״מ</td>
                      <td className='text primary-txt secondary-txt '>50,000 ₪</td>
                      <td className='rowdata_1'><img src={icsee} alt="" /></td>
                    </tr>
                    <tr>
                      <td className='text primary-txt secondary-txt rowdata_1 '>5/6/22</td>
                      <td className='text primary-txt secondary-txt rowdata_1 '>2022-653</td>
                      <td className='text primary-txt secondary-txt rowdata_1 '>משטרה ישראל</td>
                      <td className='text primary-txt secondary-txt rowdata_1 '>27,957 ₪</td>
                      <td className='rowdata_1'> <img className=' eye-img' src={icsee} alt="" /></td>
                    </tr> */}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
