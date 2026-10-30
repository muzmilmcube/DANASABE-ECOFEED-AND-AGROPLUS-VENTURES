import { useState, type FormEvent } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleCheck, Factory, Leaf, Menu, Sprout, Wheat, X } from 'lucide-react'

const photo = (id: string, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`

const operations = [
  { n: '01', title: 'Animal feed production', desc: 'Locally sourced agricultural residues processed into nutritious feed, complemented with appropriate additives, vitamins and minerals.', image: 'photo-1605000797499-95a51c5269ae', alt: 'Golden crop field in warm afternoon light', icon: Wheat },
  { n: '02', title: 'Agro-processing & value addition', desc: 'Efficient processing turns agricultural by-products into commercially useful livestock feed ingredients.', image: 'photo-1581091226825-a6a2a5aee158', alt: 'Industrial equipment on a production floor', icon: Factory },
  { n: '03', title: 'Livestock production', desc: 'Integrated livestock development supporting cattle, goats, sheep and poultry production.', image: 'photo-1500595046743-cd271d694d30', alt: 'Healthy cattle grazing in a green field', icon: Sprout },
  { n: '04', title: 'Agricultural mechanisation', desc: 'Modern machinery and equipment to improve farm productivity, processing efficiency and operational capacity.', image: 'photo-1500382017468-9049fed747ef', alt: 'Agricultural land and cultivated fields', icon: Factory },
  { n: '05', title: 'Sustainable value chains', desc: 'Local sourcing and resource efficiency that strengthen connections between farmers and livestock producers.', image: 'photo-1500382017468-9049fed747ef', alt: 'Lush rows of crops across a farm landscape', icon: Leaf },
  { n: '06', title: 'Feed distribution & markets', desc: 'Building reliable distribution channels to serve livestock farmers, poultry producers and agricultural customers.', image: 'photo-1601593768791-9bd2a9f3c179', alt: 'Agricultural produce ready for market', icon: ArrowRight },
]

const materials = [
  { name: 'Maize husks & cobs', local: 'Totuwan Masara', image: 'photo-1551754655-cd27e38d2076', alt: 'Ripe golden maize growing on a stalk' },
  { name: 'Maize stalks', local: 'Crop residues', image: 'photo-1605000797499-95a51c5269ae', alt: 'Corn field ready for harvest' },
  { name: 'Millet stalks', local: 'Dawa', image: 'photo-1500382017468-9049fed747ef', alt: 'Sunlit agricultural fields' },
  { name: 'Soybean residue', local: 'Dusan Soyabean', image: 'photo-1472396961693-142e6e269027', alt: 'Natural green landscape with foliage' },
  { name: 'Other by-products', local: 'Locally available', image: 'photo-1464226184884-fa280b87c399', alt: 'Fresh agricultural harvest in a field' },
]

const steps = [
  ['01', 'Raw material sourcing', 'Collection of locally available agricultural residues.'],
  ['02', 'Sorting & preparation', 'Selection and preparation of suitable materials.'],
  ['03', 'Processing & grinding', 'Mechanical processing to achieve appropriate particle sizes.'],
  ['04', 'Nutritional formulation', 'Supplementation with suitable additives, vitamins and minerals.'],
  ['05', 'Packaging & distribution', 'Preparation of finished feed products for customers.'],
]

const gallery = [
  { title: 'Harvesting equipment', image: 'photo-1500382017468-9049fed747ef', alt: 'Agricultural fields and harvest landscape' },
  { title: 'Feed mill machinery', image: 'photo-1581091226825-a6a2a5aee158', alt: 'Modern industrial machinery' },
  { title: 'Crushers & grinders', image: 'photo-1581092160562-40aa08e78837', alt: 'Industrial processing equipment' },
  { title: 'Pellet production', image: 'photo-1605000797499-95a51c5269ae', alt: 'Crop materials for animal feed production' },
  { title: 'Agricultural transport', image: 'photo-1519003722824-194d4455a60c', alt: 'Commercial transport truck on a road' },
  { title: 'Packaging & sealing', image: 'photo-1581092795360-fd1ca04f0952', alt: 'Equipment and controls in a production setting' },
]

const livestock = [
  { title: 'Cattle production', image: 'photo-1500595046743-cd271d694d30', alt: 'Cattle grazing on pasture' },
  { title: 'Goat production', image: 'photo-1524024973431-2ad916746881', alt: 'Goat standing outdoors' },
  { title: 'Sheep production', image: 'photo-1484557985045-edf25e08da73', alt: 'Sheep in a green field' },
  { title: 'Poultry production', image: 'photo-1548550023-2bdb3c5beed7', alt: 'Chickens in a poultry setting' },
]

const impacts = ['Agricultural waste reduction', 'Affordable livestock nutrition', 'Support for local farmers', 'Rural economic development', 'Improved food security']
const reasons = ['Locally available raw materials', 'Focus on affordable animal nutrition', 'Sustainable agricultural practices', 'Modern processing technology', 'Integrated agricultural operations', 'Commitment to farmers and food security']

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Dan-Asabe Ecofeed home">
    <span className="brand-mark"><Sprout size={23} strokeWidth={1.7} /></span>
    <span className="brand-name">DAN-ASABE <b>ECOFEED</b><small>& AGROPLUS VENTURES</small></span>
  </a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setSubmitted(true)
    form.reset()
  }

  return <>
    <div className="announcement"><span className="live-dot" /> Sustainable agriculture. Stronger communities. <a href="#about">Discover our approach <ArrowRight size={13} /></a></div>
    <header className="site-header">
      <div className="nav-wrap"><Brand />
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a onClick={closeMenu} href="#about">About</a><a onClick={closeMenu} href="#operations">Our operations</a><a onClick={closeMenu} href="#materials">Raw materials</a><a onClick={closeMenu} href="#impact">Our impact</a>
          <a onClick={closeMenu} className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-image" role="img" aria-label="African agricultural landscape at golden hour" />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <div className="eyebrow eyebrow-light"><span /> Agriculture, nutrition & progress</div>
          <h1>Growing a more<br />resilient <em>food future.</em></h1>
          <p>Transforming locally available agricultural resources into sustainable livestock solutions for farmers and communities across Nigeria.</p>
          <div className="hero-actions"><a className="button button-gold" href="#operations">Explore our operations <ArrowRight size={17} /></a><a className="button button-outline" href="#contact">Partner with us <ArrowUpRight size={16} /></a></div>
          <div className="hero-trust"><span className="trust-icon"><Check size={13} /></span> Locally sourced <i /> Quality focused <i /> Sustainability driven</div>
        </div>
        <a className="hero-scroll" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        <div className="hero-index"><span>01</span><div /><span>04</span></div>
      </section>

      <section className="intro-strip"><div className="page-width intro-grid"><p>From agricultural<br />residue to <em>real value.</em></p><div className="intro-copy">At DAN-ASABE ECOFEED & AGROPLUS VENTURES, we see potential where others see waste. We are building practical, locally rooted solutions for livestock, agriculture and food production.</div><a className="round-link" href="#about" aria-label="Read about us"><ArrowDownRight size={23} /></a></div></section>

      <section className="section about-section" id="about"><div className="page-width about-grid">
        <div className="about-visual"><img src={photo('photo-1500382017468-9049fed747ef', 1100)} alt="Cultivated agricultural land in a broad green landscape" loading="lazy" /><div className="image-tag"><span>Rooted in Gombe</span><b>Growing with purpose.</b></div><div className="about-stamp"><Sprout size={23} /><span>Local resources.<br />Lasting value.</span></div></div>
        <div className="about-copy"><div className="eyebrow"><span /> Who we are</div><h2>Growing agriculture.<br /><em>Empowering farmers.</em></h2><p className="lead">DAN-ASABE ECOFEED & AGROPLUS VENTURES is an agricultural and agro-processing enterprise based in Gombe State, Nigeria.</p><p>Our work centres on transforming locally available agricultural residues into affordable, nutritious and quality animal feed. Through agro-processing, livestock production and agricultural mechanisation, we aim to improve productivity, reduce waste and support sustainable food production.</p><p>We bring together local raw materials, modern processing ambitions and responsible agricultural practices to develop reliable solutions for the livestock industry.</p><div className="feature-list"><div><span>01</span><b>Sustainable resource utilisation</b></div><div><span>02</span><b>Affordable animal nutrition</b></div><div><span>03</span><b>Integrated agricultural development</b></div></div><a className="text-link" href="#process">How we work <ArrowRight size={16} /></a></div>
      </div></section>

      <section className="section operations-section" id="operations"><div className="page-width"><div className="section-heading"><div><div className="eyebrow eyebrow-light"><span /> What we do</div><h2>One connected approach.<br /><em>Many ways to grow.</em></h2></div><p>From the field to feed production, we are developing the capabilities that make agricultural value chains work better.</p></div>
        <div className="operations-grid">{operations.map((item) => <article className="operation-card" key={item.n}><a href="#contact" className="op-image-link" aria-label={`Enquire about ${item.title}`}><img src={photo(item.image, 720)} alt={item.alt} loading="lazy" /><span className="op-arrow"><ArrowUpRight size={17} /></span></a><div className="op-body"><div className="op-meta"><span>{item.n} / 06</span><item.icon size={19} strokeWidth={1.6} /></div><h3>{item.title}</h3><p>{item.desc}</p><a className="op-link" href="#contact">Explore this operation <ArrowRight size={14} /></a></div></article>)}</div>
      </div></section>

      <section className="section materials-section" id="materials"><div className="page-width"><div className="section-heading materials-heading"><div><div className="eyebrow"><span /> Our raw materials</div><h2>Turning residues<br />into <em>resources.</em></h2></div><div className="materials-intro"><p>Suitable agricultural materials, sourced locally, can become valuable ingredients for animal feed and new opportunities for farming communities.</p><a className="text-link" href="#process">See our process <ArrowRight size={16} /></a></div></div>
        <div className="materials-grid">{materials.map((m, i) => <article className={`material-card material-${i + 1}`} key={m.name}><img src={photo(m.image, 750)} alt={m.alt} loading="lazy" /><div className="material-wash" /><div className="material-count">0{i + 1}</div><div className="material-label"><span>{m.local}</span><h3>{m.name}</h3></div></article>)}</div>
        <p className="materials-note"><Leaf size={19} /> By converting suitable residues into valuable feed ingredients, we promote resource efficiency, reduce agricultural waste and create additional economic opportunities within local agricultural communities.</p>
      </div></section>

      <section className="process-section" id="process"><div className="page-width"><div className="process-top"><div><div className="eyebrow eyebrow-light"><span /> From source to solution</div><h2>A thoughtful process.<br /><em>Built around quality.</em></h2></div><p>Each stage is designed to make the most of local materials and prepare them for responsible use in animal feed.</p></div><div className="process-line">{steps.map(([n, title, desc], i) => <article className="process-step" key={n}><div className="step-node">{i === 0 ? <Wheat size={19} /> : i === 1 ? <Check size={19} /> : i === 2 ? <Factory size={19} /> : i === 3 ? <Sprout size={19} /> : <ArrowRight size={19} />}</div><span className="step-number">{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>

      <section className="section machinery-section"><div className="page-width"><div className="section-heading machinery-heading"><div><div className="eyebrow"><span /> Technology & capability</div><h2>Investing in the tools<br />to <em>move agriculture forward.</em></h2></div><p>Our proposed expansion will introduce modern agricultural machinery and industrial feed-processing equipment to strengthen production capacity, improve efficiency and support reliable distribution.</p></div><div className="machinery-grid">{gallery.map((g, i) => <article className="machine-card" key={g.title}><img src={photo(g.image, 720)} alt={g.alt} loading="lazy" /><span className="machine-no">0{i + 1}</span><div className="machine-caption">{g.title}<ArrowUpRight size={16} /></div></article>)}</div></div></section>

      <section className="section livestock-section" id="livestock"><div className="page-width"><div className="section-heading livestock-heading"><div><div className="eyebrow"><span /> Integrated livestock</div><h2>Backing the people<br />who <em>raise our future.</em></h2></div><p>Our integrated agricultural vision supports the people and enterprises working across livestock production.</p></div><div className="livestock-grid">{livestock.map((a, i) => <article className="livestock-card" key={a.title}><img src={photo(a.image, 750)} alt={a.alt} loading="lazy" /><div className="livestock-shade" /><span className="livestock-number">0{i + 1}</span><h3>{a.title}</h3><ArrowUpRight size={17} className="livestock-arrow" /></article>)}</div><div className="future-note"><div className="future-icon"><Sprout size={22} /></div><p>Looking ahead, we see opportunities to serve <b>poultry and fish farmers</b> with suitable feed products and agricultural supply solutions.</p><span>Future opportunities</span></div></div></section>

      <section className="impact-section" id="impact"><div className="impact-backdrop" /><div className="page-width impact-layout"><div className="impact-copy"><div className="eyebrow eyebrow-light"><span /> Our impact</div><h2>Creating value<br /><em>beyond animal feed.</em></h2><p>Our work connects practical agricultural solutions with the bigger goals of stronger communities and a more resilient food system.</p><a className="button button-gold" href="#contact">Build with us <ArrowRight size={16} /></a></div><div className="impact-list">{impacts.map((impact, i) => <div key={impact} className="impact-item"><span>0{i + 1}</span><b>{impact}</b><ArrowUpRight size={16} /></div>)}</div></div></section>

      <section className="section why-section"><div className="page-width why-grid"><div className="why-image"><img src={photo('photo-1516467508483-a7212febe31a', 1100)} alt="Livestock cared for on an African farm" loading="lazy" /><div className="why-image-note"><span>Our commitment</span><b>Progress rooted<br />in local potential.</b></div></div><div className="why-copy"><div className="eyebrow"><span /> The DAN-ASABE difference</div><h2>Built for the realities<br />of <em>local agriculture.</em></h2><p>We believe lasting progress starts with understanding local resources, local needs and the people who power agricultural value chains.</p><div className="reason-list">{reasons.map((r, i) => <div className="reason" key={r}><span>{String(i + 1).padStart(2, '0')}</span><b>{r}</b><Check size={15} /></div>)}</div></div></div></section>

      <section className="cta-section"><div className="cta-photo" /><div className="cta-overlay" /><div className="page-width cta-content"><div className="eyebrow eyebrow-light"><span /> Let's grow together</div><h2>Let's build a more<br /><em>sustainable future.</em></h2><p>Partner with DAN-ASABE ECOFEED & AGROPLUS VENTURES to support sustainable animal feed production, agricultural processing and livestock development in Nigeria.</p><div className="cta-actions"><a className="button button-gold" href="#contact">Discuss a partnership <ArrowUpRight size={16} /></a><a className="button button-outline" href="#contact">Contact our business <ArrowRight size={16} /></a></div></div></section>

      <section className="section contact-section" id="contact"><div className="page-width"><div className="contact-header"><div><div className="eyebrow"><span /> Start a conversation</div><h2>Let's connect and<br /><em>grow together.</em></h2></div><p>Have a business enquiry, partnership idea or question about our operations? We would like to hear from you.</p></div><div className="contact-grid"><div className="contact-info"><div className="contact-card"><span className="contact-icon"><Sprout size={21} /></span><div><small>Business name</small><b>DAN-ASABE ECOFEED &<br />AGROPLUS VENTURES</b></div></div><div className="contact-card"><span className="contact-icon"><ArrowUpRight size={21} /></span><div><small>Visit us</small><b>029, Industrial Cluster,<br />Nasarawo, Gombe,<br />Gombe State, Nigeria.</b></div></div><div className="address-note"><CircleCheck size={17} /><span>Official phone, email and map details will be added once verified.</span></div></div>
          <div className="form-panel">{submitted ? <div className="form-success" role="status"><span><Check size={25} /></span><h3>Your details passed validation.</h3><p>This page has not sent your enquiry. The business contact channel is still to be configured.</p><button className="text-link" onClick={() => setSubmitted(false)}>Edit or start again <ArrowRight size={15} /></button></div> : <form onSubmit={submitEnquiry}><div className="form-heading"><h3>Send an enquiry</h3><span>All fields marked * are required</span></div><div className="form-row"><label>Full name *<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Business / organisation<input name="organization" autoComplete="organization" placeholder="Company or organisation" /></label></div><div className="form-row"><label>Email address *<input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label><label>Phone number<input type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" /></label></div><label>Subject *<span className="select-wrap">
  <select name="subject" required defaultValue="">
    <option value="" disabled>Select an enquiry type</option>
    <option>Business partnership</option>
    <option>Feed and distribution</option>
    <option>Agricultural supply</option>
    <option>Investment and institutional enquiry</option>
    <option>Other</option>
  </select>
  <ChevronDown size={16} />
</span>
          </label>
          <label>Message *
            <textarea name="message" rows={4} placeholder="Tell us a little about your enquiry..." required />
          </label>
          <button className="button button-green submit-button" type="submit">
            Send your enquiry <ArrowRight size={16} />
          </button>
          <small className="form-privacy">
            This form currently validates your details but does not send the enquiry.
          </small>
        </form>}
      </div>
    </div>
  </div>
</section>
    </main>
    <footer className="site-footer"><div className="page-width"><div className="footer-main"><div className="footer-brand-block"><Brand light /><p>Transforming locally available agricultural resources into sustainable livestock solutions, from Gombe State, Nigeria.</p></div><div className="footer-links"><div><b>Explore</b><a href="#about">About us</a><a href="#operations">Our operations</a><a href="#materials">Raw materials</a><a href="#impact">Our impact</a></div><div><b>Our work</b><a href="#process">Production process</a><a href="#operations">Agro-processing</a><a href="#operations">Livestock</a><a href="#contact">Partnerships</a></div><div className="footer-address"><b>Find us</b><span>029, Industrial Cluster,<br />Nasarawo, Gombe,<br />Gombe State, Nigeria.</span><a href="#contact">Get in touch <ArrowUpRight size={14} /></a></div></div></div><div className="footer-bottom"><span>&copy; 2026 DAN-ASABE ECOFEED & AGROPLUS VENTURES. All Rights Reserved.</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div></div></footer>
    <a href="#home" className="back-top" aria-label="Back to top"><ArrowDown size={16} /></a>
  </>
}

export default App
