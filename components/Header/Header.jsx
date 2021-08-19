import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
  return (
    <>
   
		<header id="header-section" className="header-section sticky-header clearfix">
			<div className="container">
				<div className="row align-items-center">

					<div className="col-lg-4">
						<div className="brand-logo">
							<Link href="/">
								<a><Image width="150px" height="50px" src="/assets/images/Asset11.png" alt="logo_not_found"/></a>
							</Link>
							<div className="mobile-menu-btns float-right ul-li-right">
								<ul className="clearfix">
									<li>
										<button type="button" className="menu-btn d-none d-sm-block ">
											<span></span>
											<span></span>
											<span></span>
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-8">
						<nav className="main-menu ul-li-right clearfix">
							<ul className="clearfix">
								<li><Link href="/"><a>HOME</a></Link></li>
								<li><Link href="/myself"><a>MYSELF</a></Link></li>
								<li><Link href="/projects"><a>PROJECTS</a></Link></li>
								<li><Link href="/contactus"><a>CONTACT</a></Link></li>
							</ul>
						</nav>
					</div>
					
				</div>
			</div>
			<div className="d-block d-sm-none">
			        <br/>
                    <div className="pagination-nav ul-li-center clearfix aos-init aos-animate">
						<ul className="clearfix">
							<li><Link href="/"><a>HOME</a></Link></li>
							<li><Link href="/myself"><a>MYSELF</a></Link></li>
							<li><Link href="/projects"><a>PROJECTS</a></Link></li>
							<li><Link href="/contactus"><a>CONTACT</a></Link></li>
						</ul>
					</div>	
			</div>
		</header>
		
    </>
  )
}
