import React from 'react';

const FeaturedResearch = () => {
    return (
        <section className="fcards">
            <div className="offeringhead">
                Featured Research
            </div>
            <div className="row" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="col s12 m12 l4" style={{ padding: "50px 5px" }}>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://images.unsplash.com/photo-1590769293122-5ba1159d188f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4"
                            >One<i className="material-icons right"
                            >more_vert</i
                                ></span
                            >
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"
                            >One <i className="material-icons right">close</i></span
                            >
                            <p>
                                Here is some more information about this product that is only
                                revealed once clicked on.
                </p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l4" style={{ padding: "50px 5px" }}>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4"
                            >Two<i className="material-icons right"
                            >more_vert</i
                                ></span
                            >
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"
                            >Two <i className="material-icons right">close</i></span
                            >
                            <p>
                                Here is some more information about this product that is only
                                revealed once clicked on.
                </p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l4" style={{ padding: "50px 5px" }}>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://images.unsplash.com/photo-1590769293122-5ba1159d188f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4"
                            >Three<i className="material-icons right"
                            >more_vert</i
                                ></span
                            >
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"
                            >Three <i className="material-icons right">close</i></span
                            >
                            <p>
                                Here is some more information about this product that is only
                                revealed once clicked on.
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedResearch;