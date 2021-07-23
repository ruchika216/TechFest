import React from "react";
import vr from "./../../assets/images/VR.png";
function SponsorForm() {
  const [name, setName] = React.useState("");
  const [orgname, setOrgname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [web, setWeb] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Name: ${name}
      Organization: ${orgname}
      Email:${email}
      Phone:${phone}
      Website:${web}
    `);

    event.preventDefault();
  };

  return (
    <div>
      <div className="container flex ">
        <div className="jumbotron border border-3">
          <div className="row">
            <form onSubmit={handleSubmit} className="col border-right px-5">
              <div className="p-3 border">
                <div className="col-md-12">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Organisation Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="orgname"
                    onChange={(e) => setOrgname(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Phone No.</label>
                  <input
                    type="phone number"
                    className="form-control"
                    placeholder=""
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">
                    Company Website/Facebook Page
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="web"
                    onChange={(e) => setWeb(e.target.value)}
                  />
                </div>

                <div className="mt-5 text-center">
                  <input
                    className="btn btn-default profile-button"
                    type="submit"
                    value="Download the Brochure!"
                  />
                </div>
              </div>
            </form>
            <div className="col-lg-7">
              <h5 className="heading px-5">
                Download The Sponsorship Brochure!
              </h5>
              <img className="image text-center" src={vr} alt="Vrimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SponsorForm