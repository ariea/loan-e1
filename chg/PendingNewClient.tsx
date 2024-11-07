import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import redx from "../assets/images/ic-x-red.png";
import Edit from "../assets/images/ic-edit.png";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import IdValidation from "./components/IdValidation/IdValidation";
import { useForm } from "react-hook-form";
import GlobalConstant from "../GlobalConstant";
import { IformData } from "./Interfaces/FormValidation";

const PendingNewClient = () => {
  let newClient="newClient"
  const { register, handleSubmit, formState: { errors } } = useForm<IformData>();
  const [editInputs, setEditInputs] = useState<any>(true)
  const options = {
    title: 'Title',
    message: 'Message',
    buttons: [
      {
        label: 'Yes',
        onClick: () => alert('Click Yes')
      },
      {
        label: 'No',
        onClick: () => alert('Click No')
      }
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    willUnmount: () => { },
    afterClose: () => { },
    onClickOutside: () => { },
    onKeypress: () => { },
    onKeypressEscape: () => { },
    overlayClassName: "overlay-custom-class-name"
  };
  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => ('Click Yes')
        },
        {
          label: 'No',
          onClick: () => ('Click No')
        }
      ]
    });
  };
  return (
    <>
      <div className="bgBodyColor p-4">
        <Container fluid>
          <Row className="pb-4">
            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={6}
              sm={12}
              className="d-flex align-items-center justify-content-right">
              <p className="primary-txt d-flex justify-content-center m-0">
                לקוח חדש ממתין לאישור- {newClient}
              </p>
            </Col>

            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
              <div className="d-flex align-items-center justify-content-end">
                <img src={redx} height="50" width="50" alt="" onClick={submit} />
                <p className=" primary-txt pt-2 px-3">מחק לקוח פוטנציאלי</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="bg-white p-3">
                <img src={Edit} alt="" onClick={() => setEditInputs(false)} />
                <p className="primary-txt pb-4">פרטי העסק</p>
                <TextField
                  fullWidth
                  placeholder="שם העסק |"
                  className="DealTextFieldStyle bgBodyColor py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="ח.פ. / מס׳ עוסק |"
                  className="DealTextFieldStyle py-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                {/* <p className="primary-txt py-2 m-1">ח.פ. / מס׳ עוסק |</p> */}
                <TextField
                  fullWidth
                  placeholder="תאריך התאגדות|"
                  className="DealTextFieldStyle bgBodyColor py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="כתובת |"
                  className="DealTextFieldStyle py-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                {/* <p className="primary-txt py-2 m-1">כתובת |</p> */}
                <TextField
                  fullWidth
                  placeholder="מספר טלפון |"
                  className="DealTextFieldStyle bgBodyColor py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="מספר סלולרי"
                  className="DealTextFieldStyle py-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                {/* <p className="primary-txt py-2 m-1">מספר סלולרי</p> */}
                <TextField
                  fullWidth
                  placeholder="כתובת אתר (אופציונלי)"
                  className="DealTextFieldStyle bgBodyColor mb-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <TextField
                  fullWidth
                  className="DealTextFieldStyle bgBodyColor mt-5"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="bg-white p-3">
                <img src={Edit} alt="" />
                <p className="primary-txt pb-4">בעלי מניות</p>
                <TextField
                  fullWidth
                  placeholder="שם מלא |"
                  className="DealTextFieldStyle bgBodyColor py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                {/*<TextField
                  fullWidth
                  placeholder="ח.פ. / ת.ז. |"
                  className="DealTextFieldStyle py-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />*/}
                {/* a new idvalidation text field */}

                <IdValidation dir='rtl' InputProps={{readOnly: editInputs}} size="small" id="fullWidth" placeholder='ח.פ. / ת.ז. |' className="DealTextFieldStyle py-2" label={undefined} validationType="textField" showOtpDiv={false} register={register} errorMessage={GlobalConstant['ERROR SIGNUP ID']} idError={errors.ID ? true : false}/>
                
                {/* <p className="primary-txt py-2 m-1">ח.פ. / ת.ז. |</p> */}
                <TextField
                  fullWidth
                  placeholder="כתובת |"
                  className="DealTextFieldStyle bgBodyColor py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="מספר טלפון"
                  className="DealTextFieldStyle py-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                {/* <p className="primary-txt py-2 m-1">מספר טלפון</p> */}
                <TextField
                  fullWidth
                  placeholder="מספר סלולרי"
                  className="DealTextFieldStyle bgBodyColor py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="אימייל |"
                  className="DealTextFieldStyle py-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                {/* <p className="primary-txt py-2 m-1">אימייל |</p> */}
                <TextField
                  fullWidth
                  placeholder="אחוז בעלות % |"
                  className="DealTextFieldStyle bgBodyColor mb-2 py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <TextField
                  fullWidth
                  className="DealTextFieldStyle bgBodyColor mt-5 py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
              </div>
            </Col>

            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="bg-white p-3">
                <img src={Edit} alt="" />
                <p className="primary-txt pb-4">נושא משרה</p>
                <TextField
                  fullWidth
                  placeholder="שם מלא |"
                  className="DealTextFieldStyle bgBodyColor py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                {/*<TextField
                  fullWidth
                  placeholder="ת.ז. |"
                  className="DealTextFieldStyle py-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />*/}
                <IdValidation dir='rtl' InputProps={{readOnly: editInputs}} size="small" id="fullWidth" placeholder='ת.ז. |' className="DealTextFieldStyle py-2" label={undefined} validationType="textField" showOtpDiv={false} register={register} errorMessage={GlobalConstant['ERROR SIGNUP ID']} idError={errors.ID ? true : false}/>
                {/* <p className="primary-txt py-2 m-1">ת.ז. |</p> */}
                <TextField
                  fullWidth
                  placeholder="תפקיד |"
                  className="DealTextFieldStyle bgBodyColor py-1"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="מספר סלולרי"
                  className="DealTextFieldStyle py-2"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                {/* <p className="primary-txt py-2 m-1">מספר סלולרי</p> */}
                <TextField
                  fullWidth
                  placeholder="אימייל |"
                  className="DealTextFieldStyle bgBodyColor mb-5"
                  id="fullWidth"
                  size="small"
                  InputProps={{
                    readOnly: editInputs,
                  }}
                />
                <Row className="mt-5">
                  <Col></Col>
                  <Col>
                    <Link to="/clientnew-card">
                      <button
                        className="secondary_btn text-white mt-5  mb-3 px-5"
                        style={{ borderRadius: "20px" }}>
                        אשר לקוח חדש
                      </button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PendingNewClient;
