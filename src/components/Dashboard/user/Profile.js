import moment from "moment";
import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "./helper/userapicalls";
import Editbutton from "./assets/images/edit-button.svg";
import ProfileImage from "./assets/images/profile-image.png";
import "./assets/css/dashres.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField, FormGroup, FormControlLabel, Button, Checkbox, Collapse, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
// import Alert from "@material-ui/lab/Alert";
import { isAuthenticated } from "../../../auth/helper";

const Profile = () => {
    const [values, setValues] = useState({
        name: "",
        lastName: "",
        userID: "",
        email: "",
        phone: "",
        dob: new Date(),
        designation: "",
        collegeName: "",
        collegeAddress: "",
        courseEnrolled: "",
        whatsappPhoneNumber: "",
        telegramPhoneNumber: "",
        branchOfStudy: "",
        yearOfStudy: 0,
        loading: false,
        updated: false,
        error: "",
    });

    const [telegramPhoneNumberCheck, setTelegramPhoneNumberCheck] =
        useState(false);
    const [whatsappPhoneNumberCheck, setWhatsappPhoneNumberCheck] =
        useState(false);

    const [completeUser, setCompleteUser] = useState(null)

    const {
        name,
        lastName,
        userID,
        email,
        phone,
        dob,
        designation,
        collegeName,
        collegeAddress,
        courseEnrolled,
        branchOfStudy,
        yearOfStudy,
        whatsappPhoneNumber,
        telegramPhoneNumber,
        loading,
        updated,
        error,
    } = values;

    const { user, token } = isAuthenticated();
    const [userId, setUserId] = useState();
    // console.log(user);
    const preload = (userId, token) => {
        getUser(userId, token).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
                console.log(values);
            } else {
                setCompleteUser(data)
                setValues({
                    ...values,
                    name: data.name,
                    lastName: data.lastName,
                    userID: data.userId,
                    email: data.email,
                    phone: data.phone,
                    designation: data.designation,
                    collegeName: data.collegeName,
                    collegeAddress: data.collegeAddress,
                    courseEnrolled: data.courseEnrolled,
                    branchOfStudy: data.branchOfStudy,
                    yearOfStudy: data.yearOfStudy,
                    whatsappPhoneNumber: data.whatsappPhoneNumber,
                    telegramPhoneNumber: data.telegramPhoneNumber,
                    dob: moment(data.dob).format("YYYY-MM-DD"),
                });
            }
        });
    };





    useEffect(() => {
        preload(user._id, token);
        setUserId(user._id);
    }, []);
    const SuccessMessage = () => {
        return (
            <div

                style={{ display: updated ? "" : "none", position: 'absolute', top: '10rem', left: '5rem' }}
            >

            </div>
        );
    }
    const errorMessage = () => (
        <div
            className="alert alert-danger mt-3"
            style={{ display: error ? "" : "none" }}
        >
            <h4>profile updation failed</h4>
        </div>
    );

    const handleChange = (key) => (event) => {
        return setValues({ ...values, [key]: event.target.value });
    };
    const handleCheck = (key) => (event) => {
        if (key === "whatsappPhoneNumber") {
            if (whatsappPhoneNumberCheck === true) {
                setValues({ ...values, [key]: "" });
            } else {
                setValues({ ...values, [key]: phone });
            }

            setWhatsappPhoneNumberCheck(!whatsappPhoneNumberCheck);
        }
        if (key === "telegramPhoneNumber") {
            if (telegramPhoneNumberCheck === true) {
                setValues({ ...values, [key]: "" });
            } else {
                setValues({ ...values, [key]: phone });
            }
            setTelegramPhoneNumberCheck(!telegramPhoneNumberCheck);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();

        setValues({ ...values, error: "", loading: true, updated: false });

        updateUser(userId, token, {
            name,
            lastName,
            email,
            phone,
            dob,
            designation,
            collegeName,
            collegeAddress,
            courseEnrolled,
            branchOfStudy,
            yearOfStudy,
            whatsappPhoneNumber,
            telegramPhoneNumber,
        })
            .then((data) => {
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                        loading: false,
                    });
                } else {
                    setValues({
                        ...values,
                        loading: false,
                        error: "",
                        updated: true,
                    });
                }
            })
            .catch("user not updated");
        handleClose();
    };






    // Modal values

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            overflow: "scroll",
        },
        paper: {
            position: 'relative',
            backgroundColor: "#2a3249",
            width: "60%",
            ["@media (max-width:780px)"]: {
                // eslint-disable-line no-useless-computed-key
                width: "84%",
                marginTop: "200px"
            },
            opacity: "1",
            border: "2px solid #000",
            boxShadow: theme.shadows[8],
            padding: theme.spacing(2, 4, 3),
        },

        fontstyle: {
            color: "blue",
            width: "45%",
            ["@media (max-width:780px)"]: {
                // eslint-disable-line no-useless-computed-key
                width: "90%",
            },
            marginBottom: "0.8rem",
            marginRight: "0.5rem",
            letterSpacing: "1.3px",
        },
        input: {
            color: "white",
            fontSize: "1.6rem",
            ["@media (max-width:780px)"]: {
                // eslint-disable-line no-useless-computed-key
                fontSize: "1.2rem",
            },
            letterSpacing: "0.1rem",
        },
        inputLabel: {
            color: "#ffffff80",
            fontSize: "1.4rem",
        },
        right: {

            position: 'absolute',
            right: '5px',
            top: '5px'
        }
    }));

    const ProfileModal = () => {
        const classes = useStyles();
        return (
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={show}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 600,
                    }}
                >
                    <Fade in={show}>
                        <div className={classes.paper}>
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="medium"
                                className={classes.right}
                                onClick={() => {
                                    setShow(false);
                                }}
                            >
                                <CloseIcon fontSize="large" />
                            </IconButton>
                            <h1
                                id="transition-modal-title"
                                style={{ textAlign: "center" }}
                            >
                                Profile Update
                            </h1>

                            <br />
                            <TextField
                                className={classes.fontstyle}
                                type="text"
                                label="Name"
                                value={name}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("name")}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="text"
                                label="Last Name"
                                value={lastName}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("lastName")}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="email"
                                label="email"
                                value={email}
                                variant="outlined"

                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="tel"
                                label="Phone no."
                                value={phone}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("phone")}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="tel"
                                label="whatsapp Phone no."
                                value={whatsappPhoneNumber}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("whatsappPhoneNumber")}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={phone == whatsappPhoneNumber}
                                        onChange={handleCheck("whatsappPhoneNumber")}
                                        name="checkedB"
                                        color="primary"
                                        style={{
                                            transform: "scale(1.4)",
                                        }}
                                    />
                                }
                                label="Same as Phone"
                                style={{ margin: " 1rem" }}
                            />

                            <TextField
                                className={classes.fontstyle}
                                type="tel"
                                label="telegram Phone no."
                                value={telegramPhoneNumber}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("telegramPhoneNumber")}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={phone == telegramPhoneNumber}
                                        onChange={handleCheck("telegramPhoneNumber")}
                                        name="checkedB"
                                        color="primary"
                                        style={{ transform: "scale(1.4)" }}
                                    />
                                }
                                label="Same as Phone"
                                style={{ margin: "1rem" }}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="text"
                                label="designation"
                                value={designation}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("designation")}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="date"
                                label="dob"
                                value={dob.toString()}
                                onChange={handleChange("dob")}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="text"
                                label="College Name"
                                value={collegeName}
                                onChange={handleChange("collegeName")}
                                variant="outlined"
                                style={{ width: "90%" }}
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="text"
                                label="College Address"
                                value={collegeAddress}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("collegeAddress")}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="text"
                                label="Course Enrolled"
                                value={courseEnrolled}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("courseEnrolled")}
                            />
                            <TextField
                                className={classes.fontstyle}
                                type="text"
                                label="branch Of Study"
                                value={branchOfStudy}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("branchOfStudy")}
                            />
                            <TextField
                                className={classes.fontstyle}

                                type="number"

                                label="Year Of Study"
                                value={yearOfStudy}
                                variant="outlined"
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                onChange={handleChange("yearOfStudy")}
                            />
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={onSubmit}
                                mx="auto"
                                style={{ padding: "8px 20px", fontSize: "2rem" }}
                            >
                                Update
                            </Button>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }

    const profileInformation = () => {
        return (
            <>
                {ProfileModal()}

                <div className="profile" id="profile">
                    <div className="profile-information">
                        <div className="section-heading">
                            <div className="section-heading_text">
                                <h3 className="section-heading_heading">Profile Information</h3>
                                <p className="section-heading_information">
                                    Basic info, like your name ,Profession etc.
                                </p>
                            </div>
                            <img
                                onClick={handleShow}
                                src={Editbutton}
                                alt="edit-button"
                                className="section-heading_edit"
                            />
                        </div>
                        <div className="profile-information_card card">
                            <div className="profile-information_info">
                                <div className="pi_personal-info">
                                    <div className="pi_info-group">
                                        <div className="info-group_que">Profession</div>
                                        <div className="info-group_ans">{values.designation}</div>
                                    </div>
                                    <div className="pi_info-group">
                                        <div className="info-group_que">
                                            Organisation/College Name
                                        </div>
                                        <div className="info-group_ans">{values.collegeName}</div>
                                    </div>
                                    <div className="pi_info-group">
                                        <div className="info-group_que">
                                            Course Enrolled in
                                            {/* <span className="info-group_que_condition">
                        (only applicable on college students)
                      </span> */}
                                        </div>
                                        <div className="info-group_ans">
                                            {values.courseEnrolled}
                                        </div>
                                    </div>
                                    <div className="pi_info-group">
                                        <div className="info-group_que">
                                            Year of Study
                                            {/* <span className="info-group_que_condition">
                        (only applicable on college students)
                      </span> */}
                                        </div>
                                        <div className="info-group_ans">{values.yearOfStudy}</div>
                                    </div>
                                    <div className="pi_info-group">
                                        <div className="info-group_que">Date of Birth</div>
                                        <div className="info-group_ans">
                                            {values.dob.toString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="pi-heading">
                                    Contact Information
                                    <hr />
                                </div>
                                <div className="pi-contact-information">
                                    <div className="pi_info-group">
                                        <div className="info-group_que">E-mail Address</div>
                                        <div className="info-group_ans">{values.email}</div>
                                    </div>
                                    <div className="pi_info-group">
                                        <div className="info-group_que">Phone Number</div>
                                        <div className="info-group_ans">{values.phone}</div>
                                    </div>
                                    <div className="pi_info-group">
                                        <div className="info-group_que">WhatsApp Number</div>
                                        <div className="info-group_ans">
                                            {values.whatsappPhoneNumber}
                                        </div>
                                    </div>
                                    <div className="pi_info-group">
                                        <div className="info-group_que">Telegram Number</div>
                                        <div className="info-group_ans">
                                            {values.telegramPhoneNumber}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-information_pic">
                                <div className="pi-photo-group">
                                    <img src={ProfileImage} alt="profile-image" />
                                    <div className="pi-photo-group_name">{`${values.name} ${values.lastName}`}</div>
                                    <div className="pi-photo-group_tag">{values.userID}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };


    return (
        <>
            {
                profileInformation()
                // profileForm()
            }
            {
                SuccessMessage()
            }
        </>
    );
};

export default Profile;
