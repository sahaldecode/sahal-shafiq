import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
					<button><i className="ri-close-line" /></button>
				</div>
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">Get in touch</h3>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">Ready to bring your ideas to life? Whether you're looking for a custom website, SEO help, or digital growth strategies — I'm here to help. Let’s collaborate and build something amazing together.</p>
						<div className="mb-3">
							<span className="text-400 fs-5">Phone Number</span>
							<p className="mb-0">+92 305-7735104</p>
						</div>
						<div className="mb-3">
							<span className="text-400 fs-5">Email</span>
							<p className="mb-0">SahalDecode@gmail.com</p>
						</div>
						<div className="mb-3">
							<span className="text-400 fs-5">Whatsapp</span>
							<p className="mb-0">+923057735104</p>
						</div>
						<div className="mb-3">
							<span className="text-400 fs-5">Address</span>
							<p className="mb-0">Officer Colony Jauharabad, Pakistan</p>
						</div>
					</div>
					<div className="contact-list">
						<p className="text-400 fs-5 mb-2">Social</p>
						<div className="d-md-flex d-none gap-3">
							<a href="https://www.facebook.com/prosahaldecode/" target='_blank'>
								<i className="ri-facebook-circle-fill fs-18" />
							</a>
							<a href="https://www.instagram.com/sahaldecode/" target='_blank'>
								<i className="ri-instagram-fill fs-18" />
							</a>
							<a href="https://www.tiktok.com/@sahaldecode/" target='_blank'>
								<i className="ri-tiktok-fill fs-18" />
							</a>
							<a href="https://www.linkedin.com/in/sahalshafiqkhan/" target='_blank'>
								<i className="ri-linkedin-fill fs-18" />
							</a>
							<a href="https://github.com/sahaldecode" target='_blank'>
								<i className="ri-github-fill fs-18" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />
		</>
	)
}
