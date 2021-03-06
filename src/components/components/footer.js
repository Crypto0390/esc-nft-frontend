import React from 'react';
import { Link } from '@reach/router';

const footer = () => (
	<footer className="footer-light">
		{/* <div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-6 col-xs-1">
					<div className="widget">
						<h5>Marketplace</h5>
						<ul>
							<li><Link to="">All NFTs</Link></li>
							<li><Link to="">Art</Link></li>
							<li><Link to="">Music</Link></li>
							<li><Link to="">Domain Names</Link></li>
							<li><Link to="">Virtual World</Link></li>
							<li><Link to="">Collectibles</Link></li>
						</ul>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-1">
					<div className="widget">
						<h5>Resources</h5>
						<ul>
							<li><Link to="">Help Center</Link></li>
							<li><Link to="">Partners</Link></li>
							<li><Link to="">Suggestions</Link></li>
							<li><Link to="">Discord</Link></li>
							<li><Link to="">Docs</Link></li>
							<li><Link to="">Newsletter</Link></li>
						</ul>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-1">
					<div className="widget">
						<h5>Community</h5>
						<ul>
							<li><Link to="">Community</Link></li>
							<li><Link to="">Documentation</Link></li>
							<li><Link to="">Brand Assets</Link></li>
							<li><Link to="">Blog</Link></li>
							<li><Link to="">Forum</Link></li>
							<li><Link to="">Mailing List</Link></li>
						</ul>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-1">
					<div className="widget">
						<h5>Newsletter</h5>
						<p>Signup for our newsletter to get the latest news in your inbox.</p>
						<form action="#" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
							<div className="col text-center">
								<input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" />
								<Link to="" id="btn-subscribe">
									<i className="arrow_right bg-color-secondary"></i>
								</Link>
								<div className="clearfix"></div>
							</div>
						</form>
						<div className="spacer-10"></div>
						<small>Your email is safe with us. We don't spam.</small>
					</div>
				</div>
			</div>
		</div> */}
		<div className="subfooter">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="de-flex">
							<div className="de-flex-col">
								<span onClick={() => window.open("", "_self")}>
									<img alt="" className="f-logo d-1" src="./img/logo.svg" height="40px" style={{ "marginTop": "-10px" }} />
									<span className="copy">&copy; Copyright 2021 - Artist Spotlight</span>
								</span>
							</div>
							<div className="de-flex-col">
								<div className="social-icons">
									<a href="https://twitter.com/ethsidemafia" target="_blank" alt='' rel="noreferrer">
										<span><i className="fa fa-twitter fa-lg"></i></span>
									</a>
									<a href="https://discord.gg/ethsidemafia" target="_blank" alt='' rel="noreferrer">
										<span><i className="fa fa-address-book fa-lg"></i></span>
									</a>
									<a href="https://linktr.ee/EthsideMafia" target="_blank" alt='' rel="noreferrer">
										<span><i className="fa fa-tree fa-lg"></i></span>
									</a>
									<a href="https://ethsidegames.club" target="_blank" alt='' rel="noreferrer">
										<span><i className="fa fa-home fa-lg"></i></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
export default footer;