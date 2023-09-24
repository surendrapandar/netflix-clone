import React from  "react"
import "./Landing_page.css"
import { Link } from "react-router-dom";

function Landing_page() {
    return <div className="all_content">
    <div className="content">
    <h1 className="title">The biggest Indian hits. The best Indian stories. All streaming here.</h1>
    <h3 className="subtitle">Watch anywhere. Cancel anytime.</h3>
    <h4 className="ctc">Ready to watch? Enter your email to create or restart your membership.
</h4>
<Link to="/login"><button type="submit" className="home_login_btn btn btn-danger">
          Login
        </button></Link>
    </div>
    </div>
}

export default Landing_page;