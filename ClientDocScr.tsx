import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import icupload from "../assets/images/Upload-img.png";
import Dummypdf from "../assets/images/Dummypdfimg.jpg";
import icsee from "../assets/images/ic-see-copy.png";
import { positions } from "@mui/system";
import { useTheme } from "@mui/material";
import { DialogContent, DialogContentText, useMediaQuery } from "@mui/material";
import { Close } from "@mui/icons-material";
import Pdf from "./Pdf";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import Dialog from "@mui/material/Dialog";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import print from "print-js";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import sendFileToServer from "./functions/ClientDocScr/sendFileToServer";
import getFilesFromServer from "./functions/ClientDocScr/getFilesFromServer";

const Styles = {
	Dummypdfimg: {
		width: "100%",
		height: "140px",
		backgroundSize: "cover",
	},
	Uploadbtn: {
		width: "60px",
		height: "60px",
		marginBottom: "10px",
	},
};
interface SetInitialTabExampleProps {
	fileUrl: string;
}

const ClientDocScr = () => {
	let userName = "userName";
	const [checkDoc, setCheckdoc] = useState();
	const [openPdf, setOpenPdf] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	const [dataTables2, setDataTable2] = useState([
		{ id: "1", text: "תעודת התאגדות", img: icupload, status: true, file: null },
		{ id: "2", text: " תעודה מזהה 1", img: icupload, status: true, file: null },
		{ id: "3", text: " תעודה מזהה 2", img: icupload, status: true, file: null },
		{
			id: "4",
			text: " דפי חשבון בנק 3 חודשים אחרונים",
			img: icupload,
			status: true,
			file: null,
		},
		//{ id: "5", text: "תעודת התאגדות", img: icupload, status: false },
		//{ id: "6", text: "תעודת התאגדות", img: icupload, status: false },
	]);
	const [dataTables1, setDataTable1] = useState([
		{
			id: "7",
			text: " אישור על ניהול ספרים",
			img: icupload,
			status: true,
			file: null,
		},
		{
			id: "8",
			text: " אישור על ניהול חשבון",
			img: icupload,
			status: true,
			file: null,
		},
		{
			id: "9",
			text: " תמצית אובליגו דו״ח יתרות מכל הבנקים",
			img: icupload,
			status: false,
			file: null,
		},
		{ id: "10", text: "  הצהרת נהנה", img: icupload, status: true, file: null },
		{
			id: "11",
			text: "הצהרת מבקש שירות",
			img: icupload,
			status: false,
			file: null,
		},
	]);

	const [dataTables3, setDataTable3] = useState([
		{ id: "1", text: "תעודת התאגדות", img: icupload, status: true, file: null },
		{ id: "2", text: "תזכיר ותקנון", img: icupload, status: true, file: null },
		{
			id: "3",
			text: "נסח חברה מעודכן מרשם החברות",
			img: icupload,
			status: true,
			file: null,
		},
		{ id: "4", text: "תעודה מזהה 1", img: icupload, status: true, file: null },
		{ id: "5", text: "תעודה מזהה 2", img: icupload, status: true, file: null },
		{
			id: "6",
			text: " דפי חשבון בנק 3 חודשים אחרונים",
			img: icupload,
			status: true,
			file: null,
		},
		{
			id: "7",
			text: "אישור על ניהול ספרים",
			img: icupload,
			status: false,
			file: null,
		},
		{
			id: "8",
			text: "אישור על ניהול חשבון ",
			img: icupload,
			status: false,
			file: null,
		},
		{
			id: "9",
			text: "אישור זכויות חתימה בחברה מרו״ח או עו״ד",
			img: icupload,
			status: true,
			file: null,
		},
		{
			id: "10",
			text: "תמצית אובליגו דו״ח יתרות מכל הבנקים",
			img: icupload,
			status: true,
			file: null,
		},
		{ id: "11", text: "  הצהרת נהנה", img: icupload, status: true, file: null },
		{
			id: "12",
			text: "הצהרת מבקש שירות",
			img: icupload,
			status: false,
			file: null,
		},
	]);
	const [pdfArray, setPdfArray] = useState([{}]);
	useEffect(() => {
		const asyncGetFilesFromServer = async () => {
			await getFilesFromServer();
		};
		asyncGetFilesFromServer();
	}, []);

	//new state regarding the modal overlay pdf
	const [modalOverlayPdfFile, setModalOverlayPdfFile] = useState("");

	const [dataTable, setDataTable] = useState<any[]>(/* Initial state here */);
	const onChange = async (
		e: React.ChangeEvent<HTMLInputElement>,
		index: any,
		dataTable: any[],
		setDataTable: React.Dispatch<React.SetStateAction<any[]>>
	) => {
		const files: FileList | null = e.target.files;
		if (!files || files.length === 0) {
			// checks if the file list is null
			return;
		}

		const file: File = files[0];

		try {
			sendFileToServer(file, dataTable[index].text + ".pdf");

			const newArray = dataTable.map((item: any, i: any) => {
				if (index === i) {
					return { ...item, file: [file] }; // Store the file in an array
				} else {
					return item;
				}
			});

			setDataTable(newArray);
		} catch (error) {
			console.error("Error sending file:", error);
			// Handle error state or show a notification to the user
		}
	};

	const handleClickOpenPdf = (param: string) => {
		setModalOverlayPdfFile(param);
		setOpenPdf(true);
	};

	const handleClosePdf = () => {
		setOpenPdf(false);
	};

	const pdfPrint = () => {
		print({
			printable: "CekiSalem.pdf",
		});
	};

	return (
		<>
			<div className="BlockBgColor">
				<Container>
					<Row style={{ padding: "30px 0px 20px" }}>
						<Col>
							<p className="primary-txt">
								רשימת לקוחות - {userName} - פרטי לקוח עם מסמכים מצורפים
							</p>
						</Col>
					</Row>
				</Container>

				<Container className="pb-4">
					<div className="bg-white p-3">
						<Row>
							<div
								className="LabelTextFontSize"
								style={{ padding: "0px", textAlign: "right" }}>
								<FormControl>
									<RadioGroup
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group"
										defaultValue={"ח.פ."}
										onChange={(e: any) => setCheckdoc(e.target.value)}>
										<FormControlLabel
											value="ח.פ."
											control={<Radio />}
											label="ח.פ. "
										/>
										<FormControlLabel
											value=" עוסק מורשה"
											control={<Radio />}
											label="עוסק מורשה"
										/>
									</RadioGroup>
								</FormControl>
							</div>
						</Row>
						<>
							{checkDoc === " עוסק מורשה" ? (
								<>
									<Row>
										{dataTables2?.map((i: any, index: any) => {
											return (
												<Col
													xxl={2}
													xl={2}
													lg={3}
													md={4}
													sm={6}
													xs={12}
													key={i?.id}>
													<div>
														{i?.file ? (
															<div className="pdfPreviewStyle">
																<div className="PdfBlockPosition">
																	<div style={{ padding: "15px 0px" }}>
																		{/* <img
                                      className="EyeImgPostion"
                                      src={icsee}
                                      alt=""
                                      onClick={handleClickOpenPdf}
                                    /> */}
																		<img
																			className="ZoomImgPostion"
																			src={icsee}
																			alt=""
																			onClick={() =>
																				handleClickOpenPdf(
																					URL.createObjectURL(i?.file[0])
																				)
																			}
																		/>
																	</div>
																</div>
																<div style={{ height: "200px" }}>
																	<Viewer
																		fileUrl={URL.createObjectURL(i?.file[0])}
																		defaultScale={SpecialZoomLevel.PageFit}
																	/>
																</div>

																<div className="position-relative">
																	<div className="bgBodyColor ">
																		<p className="second-table EyeImgContent">
																			{/*תעודת התאגדות*/} {i?.text}
																		</p>
																	</div>
																</div>
															</div>
														) : (
															<div
																style={{
																	alignItems: "center",
																	fontSize: "2rem",
																	height: "100%",
																	justifyContent: "center",
																	width: "100%",
																	margin: "10px",
																}}>
																<div
																	className="bgBodyColor UploadBtnBlock p-3"
																	style={{ position: "relative" }}>
																	<input
																		type="file"
																		accept=".pdf"
																		onChange={(e) =>
																			onChange(
																				e,
																				index,
																				dataTables2,
																				setDataTable2
																			)
																		}
																		className="ChooseFileStyle"
																	/>

																	<img
																		style={Styles.Uploadbtn}
																		src={i?.img}
																		alt=""
																	/>
																	<p
																		className="LabelTextFontSize"
																		style={{
																			padding: "0px",
																			textAlign: "center",
																		}}>
																		{i?.text}
																	</p>
																</div>
															</div>
														)}
													</div>
												</Col>
											);
										})}
									</Row>

									<Row>
										{dataTables1?.map((i: any, index: any) => {
											return (
												<Col
													xxl={2}
													xl={2}
													lg={3}
													md={4}
													sm={6}
													xs={12}
													key={i?.id}>
													<div>
														{i?.file ? (
															<div className="pdfPreviewStyle">
																<div className="PdfBlockPosition">
																	<div style={{ padding: "15px 0px" }}>
																		{/* <img
                                      className="EyeImgPostion"
                                      src={icsee}
                                      alt=""
                                      onClick={handleClickOpenPdf}
                                    /> */}
																		<img
																			className="ZoomImgPostion"
																			src={icsee}
																			alt=""
																			onClick={() =>
																				handleClickOpenPdf(
																					URL.createObjectURL(i?.file[0])
																				)
																			}
																		/>
																	</div>
																</div>
																<div style={{ height: "200px" }}>
																	<Viewer
																		fileUrl={URL.createObjectURL(i?.file[0])}
																		defaultScale={SpecialZoomLevel.PageFit}
																	/>
																</div>

																<div className="position-relative">
																	<div className="bgBodyColor ">
																		<p className="second-table EyeImgContent">
																			{/*תעודת התאגדות*/} {i?.text}
																		</p>
																	</div>
																</div>
															</div>
														) : (
															<div
																style={{
																	alignItems: "center",
																	fontSize: "2rem",
																	height: "100%",
																	justifyContent: "center",
																	width: "100%",
																	margin: "10px",
																}}>
																<div
																	className="bgBodyColor UploadBtnBlock p-3"
																	style={{ position: "relative" }}>
																	<input
																		type="file"
																		accept=".pdf"
																		onChange={(e) =>
																			onChange(
																				e,
																				index,
																				dataTables1,
																				setDataTable1
																			)
																		}
																		className="ChooseFileStyle"
																	/>

																	<img
																		style={Styles.Uploadbtn}
																		src={i?.img}
																		alt=""
																	/>
																	<p
																		className="LabelTextFontSize"
																		style={{
																			padding: "0px",
																			textAlign: "center",
																		}}>
																		{i?.text}
																	</p>
																</div>
															</div>
														)}
													</div>
												</Col>
											);
										})}
									</Row>
								</>
							) : (
								<Row>
									{dataTables3?.map((item: any, index: any) => {
										return (
											<Col
												xxl={2}
												xl={2}
												lg={3}
												md={4}
												sm={6}
												xs={12}
												key={item?.id}>
												<div>
													{item?.file ? (
														<div className="pdfPreviewStyle">
															<div className="PdfBlockPosition">
																<div style={{ padding: "15px 0px" }}>
																	{/* <img
                                    className="EyeImgPostion"
                                    src={icsee}
                                    alt=""
                                    onClick={handleClickOpenPdf}
                                  /> */}
																	<img
																		className="ZoomImgPostion"
																		src={icsee}
																		alt=""
																		onClick={() =>
																			handleClickOpenPdf(
																				URL.createObjectURL(item?.file[0])
																			)
																		}
																	/>
																</div>
															</div>
															<div style={{ height: "200px" }}>
																<Viewer
																	fileUrl={
																		item?.file[0]
																			? URL.createObjectURL(item?.file[0])
																			: ""
																	}
																	defaultScale={SpecialZoomLevel.PageFit}
																/>
															</div>

															<div className="position-relative">
																<div className="bgBodyColor ">
																	<p className="second-table EyeImgContent">
																		{/*תעודת התאגדות*/} {item?.text}
																	</p>
																</div>
															</div>
														</div>
													) : (
														<div
															style={{
																alignItems: "center",
																fontSize: "2rem",
																height: "100%",
																justifyContent: "center",
																width: "100%",
																margin: "10px",
															}}>
															<div
																className="bgBodyColor UploadBtnBlock p-3"
																style={{ position: "relative" }}>
																<input
																	type="file"
																	accept=".pdf"
																	onChange={(e) =>
																		onChange(
																			e,
																			index,
																			dataTables3,
																			setDataTable3
																		)
																	}
																	className="ChooseFileStyle"
																/>

																<img
																	style={Styles.Uploadbtn}
																	src={item?.img}
																	alt=""
																/>
																<p
																	className="LabelTextFontSize"
																	style={{
																		padding: "0px",
																		textAlign: "center",
																	}}>
																	{item?.text}
																</p>
															</div>
														</div>
													)}
												</div>
											</Col>
										);
									})}
								</Row>
							)}
							<div>
								<p
									className="pt-3"
									style={{
										color: "#df281b",
										textAlign: "right",
										fontSize: "20px",
									}}>
									* נא לסיים את העלאת המסמכים
								</p>
							</div>
							<Dialog
								className="pdfModal"
								fullScreen={fullScreen}
								open={openPdf}
								onClose={handleClosePdf}
								aria-labelledby="responsive-dialog-title">
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<Close
										style={{ color: "white" }}
										className="me-3"
										onClick={handleClosePdf}
									/>
									<div>
										<Link to="">
											<div className="clientbtn">
												<button className="secondary_btn text-white">
													כנס להלוואה מקושרת
												</button>
											</div>
										</Link>
									</div>
									<div>
										<LocalPrintshopOutlinedIcon
											style={{ color: "white" }}
											className="ms-3"
											onClick={pdfPrint}
										/>
										<AlternateEmailIcon
											style={{ color: "white" }}
											className="ms-2"
										/>
									</div>
								</div>
								<DialogContent className="p-2">
									<DialogContentText>
										<Pdf pdfSrc={modalOverlayPdfFile} />
									</DialogContentText>
								</DialogContent>
							</Dialog>
						</>
					</div>
				</Container>
			</div>
		</>
	);
};

export default ClientDocScr;
