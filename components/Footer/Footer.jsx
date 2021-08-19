import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    
		<footer id="footer-section" className="footer-section sec-ptb-100 clearfix">
			<div className="container">
				<div className="row justify-content-lg-end">
					<div className="col-lg-11 col-md-12">

						<div className="section-title mb-60" >
							<h2 className="title-text mb-0">CONTACT</h2>
						</div>

						<div className="row">
							<div className="col-lg-3 col-md-3">
								<div className="useful-links ul-li-block clearfix" >
									<ul className="clearfix">
										<li>Baizid Md Ashadzzaman</li>
										<li>Engineer/Programmer/Developer</li>
										<li>8801862420119</li>
										<li>baizid.md.ashadzzaman@gmail.com</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-2 col-md-3">
								<div className="useful-links ul-li-block clearfix" >
									<ul className="clearfix">
										
										<li><a href="https://www.linkedin.com/in/zamanasad/" target="_blank" rel="noreferrer"  >Linkedin</a></li>
										<li><a href="https://www.youtube.com/channel/UCGP5kbtnscx5uTN5suCZfMA?view_as=subscriber" target="_blank" rel="noreferrer"  >Youtube</a></li>
										<li><a href="https://www.behance.net/asadzaman0167" target="_blank" rel="noreferrer"  >Behance</a></li>
										<li><a href="https://www.facebook.com/asadzaman0167" target="_blank" rel="noreferrer"  >Facebook</a></li>
										
									</ul>
								</div>
							</div>

							<div className="col-lg-7 col-md-6">
								<div className="instagram-shoots-2 ul-li-right clearfix" >
									<ul className="zoom-gallery mb-2 clearfix">
										<li>
											<a href="/assets/images/gifs/a.gif" className="popup-image">
												<Image layout='fill' src="/assets/images/gifs/a.gif" alt="image_not_found"/>
											</a>
										</li>
										<li>
											<a href="/assets/images/gifs/f35bbb9d69600ec552ca03870fb302e7.gif" className="popup-image">
												<Image layout='fill' src="/assets/images/gifs/f35bbb9d69600ec552ca03870fb302e7.gif" alt="image_not_found"/>
											</a>
										</li>
										<li>
											<a href="/assets/images/gifs/d3ecd45fd1a37b2e99cf466e3db89a97.gif" className="popup-image">
												<Image layout='fill' src="/assets/images/gifs/d3ecd45fd1a37b2e99cf466e3db89a97.gif" alt="image_not_found"/>
											</a>
										</li>
										<li>
											<a href="/assets/images/gifs/2aad6055504d723c4a6ca02e91aa4a43.gif" className="popup-image">
												<Image layout='fill' src="/assets/images/gifs/2aad6055504d723c4a6ca02e91aa4a43.gif" alt="image_not_found"/>
											</a>
										</li>
									</ul>
									
									<span className="list-title text-right mt-0"><a href="https://www.instagram.com/iam.asadzaman/?hl=en" target="_blank" rel="noreferrer"  style={{color:'black'}} ><i className="fab fa-instagram mr-1"></i> IAM.ASADZAMAN</a></span>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</footer>
		
    
  )
}
