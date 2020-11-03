import './App.css';

  const Logo = () => 
  <a href=".header" className="logo">
  <svg width="149" height="30" viewBox="0 0 149 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 13.2912V29.3236H2.99051V16.2817H16.2817V13.2912H0ZM0 3.23972H19.0645V0.249209H0V3.23972ZM31.3588 0.249209H28.6175L17.6108 29.3236H20.9336L29.9882 5.02572L39.0013 29.3236H42.324L31.3588 0.249209ZM58.938 26.6654C52.3764 26.6654 47.682 21.3489 47.682 14.7864C47.682 8.26544 52.3764 2.94898 58.938 2.94898C62.9253 2.94898 66.2897 4.90112 68.2833 7.93228L70.9416 6.60405C68.4504 2.6167 64.0883 0 58.938 0C50.7565 0 44.6085 6.60405 44.6085 14.7864C44.6085 22.9688 50.7565 29.6144 58.938 29.6144C64.0883 29.6144 68.4504 26.9977 70.9416 22.9688L68.2833 21.6812C66.2897 24.7133 62.9253 26.6654 58.938 26.6654ZM73.0183 3.23972H94.0774V0.249209H73.0183V3.23972ZM82.0314 29.3236H85.0634V8.05777H82.0314V29.3236ZM108.822 0C100.639 0 94.7004 6.64558 94.7004 14.828C94.7004 23.0103 100.639 29.6559 108.822 29.6559C117.005 29.6559 122.903 23.0103 122.903 14.828C122.903 6.64558 117.005 0 108.822 0ZM108.822 26.7069C102.259 26.7069 97.7731 21.3905 97.7731 14.828C97.7731 8.26544 102.259 2.94898 108.822 2.94898C115.343 2.94898 119.829 8.26544 119.829 14.828C119.829 21.3905 115.343 26.7069 108.822 26.7069ZM148.197 29.3236L141.635 17.6939C145.124 16.4063 147.491 13.042 147.491 9.26228C147.491 4.31963 143.836 0.249209 138.354 0.249209C133.494 0.249209 127.471 0.249209 127.471 0.249209V3.23972H138.354C142.049 3.23972 144.376 5.98102 144.376 9.26228C144.376 12.502 142.049 15.2848 138.354 15.2848H127.471V29.3236H130.462V18.2753H138.354C138.436 18.2753 138.478 18.2753 138.52 18.2753L144.75 29.3236H148.197Z" fill="white"/>
      </svg>
  </a>
  
  const Menu = () =>
  <div className="menu">
          <a className="menu__button" href="google.com">Menu</a>
          <div className="burger">
              <div className="burger__slice"></div>
              <div className="burger__slice"></div>
          </div>
          </div>

  const Arrow = () =>
  <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M24.2206 7.87969C24.063 8.0401 23.8006 8.0401 23.6375 7.87969C23.4798 7.72469 23.4798 7.46671 23.6375 7.31208L26.5945 4.40466L0.408252 4.40466C0.180792 4.4043 0 4.22654 0 4.00289C0 3.77924 0.180792 3.5957 0.408252 3.5957L26.5945 3.5957L23.6375 0.693704C23.4798 0.533285 23.4798 0.274952 23.6375 0.120314C23.8006 -0.0401049 24.0634 -0.0401049 24.2206 0.120314L27.8776 3.71601C28.0408 3.87101 28.0408 4.12899 27.8776 4.28362L24.2206 7.87969Z" fill="#202020"/>
  </svg> 

  
          
  const HeaderMobile = () =>
  <header className="header-mobile">
        <Logo/>
        <Menu/>
    </header>

  const Header = () =>
  <header className="header">
        <Logo/>
        <div className="header__info">
            <ul className="navigation">
                <li>
                    <a href="https://www.google.com">Services</a>
                </li>
                <li>
                    <a href="https://www.google.com">Portfolio</a>
                </li>
                <li>
                    <a href="https://www.google.com">About</a>
                </li>
                <li className="navigation_contact">
                    <a href="https://www.google.com">Contact</a>
                </li>
            </ul>
            <a className="navigation_discuss" href="google.com">Discuss Your Idea</a>
        </div>
        <div className="header__aside">
            <a className="mail" href="mailto:hello@digitfactor.com">hello@digitfactor.com</a>
            <Menu/>
        </div>
    </header>
    
    const HeadSection = () =>
    <section className="head-section">
            <video  className="video" loop muted autoPlay src="./video/GettyImages.mp4"></video>
            <div className="head-section__main-block">
            <div className="head-section__main">
                <div className="sub-title">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z" fill="#FFCA00"/>
                        </svg>
                        Welcome to Digit Factor
                </div>
                <h1 className="title">
                    Creative Web Production from Ukraine
                </h1>
                    <a className="title-discuss_link" href="https://www.google.com">Discuss Your Idea<div className="title-discuss_link_circle"></div></a>
            </div>
            </div>
        {/* <!-- <div class="arrow">
            <svg width="8" height="48" viewBox="0 0 8 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.87969 44.2206C8.0401 44.063 8.0401 43.8006 7.87969 43.6375C7.72469 43.4798 7.46671 43.4798 7.31208 43.6375L4.40466 46.5945L4.40466 0.408252C4.4043 0.180792 4.22654 0 4.00289 0C3.77924 0 3.5957 0.180792 3.5957 0.408252L3.5957 46.5945L0.693704 43.6375C0.533285 43.4798 0.274952 43.4798 0.120314 43.6375C-0.0401049 43.8006 -0.0401049 44.0634 0.120314 44.2206L3.71601 47.8776C3.87101 48.0408 4.12899 48.0408 4.28362 47.8776L7.87969 44.2206Z" fill="#7E7E7E"/>
                </svg>  
                Scroll down              
        </div> --> */}
        <button className="messanger">
            <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.1" width="100" height="100" rx="48" fill="#FFCA00"/>
                <rect x="12" y="12" width="76" height="76" rx="38" fill="#FFCA00"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M62.3377 42.8074V49.9809C62.3377 52.636 60.1488 54.7883 57.4485 54.7883H45.015L39.385 60.2345C39.1844 60.4285 38.9181 60.5314 38.6474 60.5314C38.5105 60.5314 38.3725 60.5052 38.2412 60.451C37.8505 60.29 37.5962 59.914 37.5962 59.4975V54.7789C35.0325 54.6299 33 52.5393 33 49.9809V42.8074C33 40.1523 35.1889 38 37.8891 38H57.4486C60.1487 38 62.3377 40.1523 62.3377 42.8074ZM64.4399 50.7387V50.3689C65.8857 50.5627 67.0001 51.7809 67 53.2555V57.6041C67 59.155 65.7679 60.4224 64.2137 60.5127V63.3732C64.2137 63.6257 64.0596 63.8536 63.8227 63.9513C63.7431 63.9839 63.6595 64 63.5764 64C63.4124 64 63.251 63.9375 63.1293 63.8199L59.7164 60.5184H52.1792C50.5424 60.5184 49.2154 59.2137 49.2154 57.6041V56.8428H58.2321C61.6551 56.8428 64.4399 54.1045 64.4399 50.7387Z" fill="#202020"/>
                </svg>
        </button>
        </section>
 const ServiceItem = ({serviceTitleContent, children, imgSrc}) =>
                <div className="body-section__service-list">
                    <div className="service-list_item">
                       <img  className="item-img"  width="130" height="130" src={imgSrc} alt="icon-engineering-service"></img>
                        <div className="service-list_item_service-description">
                            <a href="https://www.google.com" className="item_title">{serviceTitleContent} </a>
                            <div className="item_description">{children}</div>
                            <a href="https://www.google.com" className="learn-more">Learn More
                                   <Arrow/>                                
                            </a>
                        </div>
                    </div>
                </div>
const BlockTitle = ({title, children}) => 
    <div className="block_title">
    <div className="service-block__title">
                    <div className="list_title">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z" fill="#FFCA00"/>
                    </svg>  
                            {title}
                    </div>
                </div>
                <div className="text-about">
                          {children}
                      </div>
    </div>

const ProjectItem = ({headTitle, headContent, children, imgSrc}) =>
<div className="project-list__item">
                        <div className="project-list__item_head">
                            <img className="project-img" height="396" width="310" src={imgSrc} alt="project "></img>
                            <div className="item-head-content">
                                <div className="item_head_title">
                                    {headTitle}
                                </div>
                                <div className="item_head_name">
                                    {headContent}
                                </div>
                        </div>
                        </div>
                        <div className="project-list__item_body">
                            <div className="project_description">{children}</div>
                        </div>
 </div>

const AchievementItem = ({score, description, children}) =>
                    <div className="achivements__item">
                        <div className="achivements__item_score">
                            {score}
                        </div>
                        <div className="achivements__item_description">
                            <div className="achivements__item_title">
                                {description}
                            </div>
                            <div className="achivements__item_content">
                                {children}
                            </div>
                        </div>
                    </div>

const Client = ({srcImg, alt}) =>
<div className="clients__block">
                        <img src={srcImg} alt={alt} className="clients__block_img"></img>
                    </div>

const SeoText = () =>
<div className="body-section__seo-text">
                <div className="seo-text_title">
                    Seo text
                </div>
                <div className="seo-text_content">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="seo-text_read-more">
                    <div className="seo-text_read-more_block">
                    Read more
                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.5019 3.31982L1.13488 0.135898C1.04239 0.0482287 0.918732 0 0.786878 0C0.654951 0 0.531366 0.0482287 0.438732 0.135898L0.143854 0.41489C0.0510732 0.502421 0 0.61943 0 0.744118C0 0.868807 0.0510732 0.985676 0.143854 1.07328L4.15259 4.86424C4.24551 4.95218 4.36968 5.00034 4.50168 5C4.63427 5.00034 4.75829 4.95225 4.85129 4.86424L8.85615 1.07681C8.94893 0.989205 9 0.872336 9 0.747578C9 0.62289 8.94893 0.50602 8.85615 0.41835L8.56127 0.139427C8.36934 -0.0420699 8.0569 -0.0420699 7.86505 0.139427L4.5019 3.31982Z" fill="#202020"/>
                        </svg>
                    </div>
                </div>
            </div>
  const ServiceItemBlock = ({children}) =>
            <div className="service__items">
                {children}
            </div>
  const MainServiceBlock = ({children}) =>
        <div className="body-section__service-block">
            {children}
        </div>
  const PortfolioBlock = ({children}) =>
    <div className="body-section__project-list">
        {children}
    </div>
  const MainPortfolioBlock = ({children}) =>
    <div className="body-section__portfolio-block">
        {children}
    </div>
  const AchivmnetItemBlock =({children}) =>
            <div className="body-section__achivementes">
                <div className="achievements">
                    {children}
                </div>
            </div>
  const ClientsBlock = ({children})=>
        <div className="clients">
            {children}
        </div>
  const MainClientsBlock = ({children}) =>
    <div className="body-section__clients">
        {children}
    </div>
  const Main = () =>
        <div className="body-section">
            <MainServiceBlock>
                <BlockTitle title='Service'/>
                    <ServiceItemBlock>
                        <ServiceItem imgSrc='./images/icon-engineering-service .png' serviceTitleContent='Engineering Service'> Software Development / Software Testing / Solutions Architecture / Business Analysis / Operations Support </ServiceItem>
                        <ServiceItem imgSrc='./images/icon internet of thing.png' serviceTitleContent='Internet of Things'>Intelligent Mobility / Predictive Maintenance / Smart Manufacturing</ServiceItem>
                        <ServiceItem imgSrc='./images/icon extended reality.png' serviceTitleContent='Extended Reality XR'>VR / MR / AR</ServiceItem>
                        <ServiceItem imgSrc='./images/icon al & im.png' serviceTitleContent='AL & ML' >Artificial Intelligence / Intelligent Automation / Advanced Analytics</ServiceItem>
                        <ServiceItem imgSrc='./images/icon big data and analityc.png' serviceTitleContent='Big data & Analytics'>BI & Augmented Analytics / Enterprise Data Platforms / Data Strategy and Governance</ServiceItem>
                        <ServiceItem imgSrc='./images/icon blockchain.png' serviceTitleContent='Blockchain' >Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы</ServiceItem>
                        <ServiceItem imgSrc='./images/icon game art.png' serviceTitleContent='Game Art Production' >Concept art, UI, illustration / 3D models and environments / VXT and animations</ServiceItem>
                    </ServiceItemBlock>
            </MainServiceBlock>
            <MainPortfolioBlock>
                <BlockTitle title='Portfolio'>Здесь будет какой-то текст который расскажет о услугах</BlockTitle>
                <PortfolioBlock>
                    <ProjectItem imgSrc='./images/project-img2.jpg' headTitle='Landing Page' headContent='Project Name' >Создаем прибыльные<br/>  интернет-магазины, маркетплейсы</ProjectItem>
                    <ProjectItem imgSrc='./images/project-img3.jpg' headTitle='Landing Page' headContent='Project Name' >Создаем прибыльные<br/>  интернет-магазины, маркетплейсы</ProjectItem>
                    <ProjectItem imgSrc='./images/project-img2.jpg' headTitle='Landing Page' headContent='Project Name' >Создаем прибыльные<br/>  интернет-магазины, маркетплейсы</ProjectItem>
                </PortfolioBlock>
            </MainPortfolioBlock>
            <AchivmnetItemBlock>
                <AchievementItem score='2+' description='Years'>Создаем прибыльные интернет-магазины, маркетплейсы</AchievementItem>
                <AchievementItem score='40+' description='Project'>Создаем прибыльные интернет-магазины, маркетплейсы</AchievementItem>
                <AchievementItem score='10+' description='Expert' >Создаем прибыльные интернет-магазины, маркетплейсы</AchievementItem>
                <AchievementItem score='40+' description='Project'>Создаем прибыльные интернет-магазины, маркетплейсы</AchievementItem>
            </AchivmnetItemBlock>
            <MainClientsBlock>
            <BlockTitle title='Clients'>Здесь будет какой-то текст который расскажет о услугах</BlockTitle>
            <ClientsBlock>
                <Client srcImg='./images/stada_color.png' alt='stada img' />
                <Client srcImg='./images/Hunter_Logo.png' alt='hunter img' />
                <Client srcImg='./images/eroglu_logo.png' alt='erogu img' />
                <Client srcImg='./images/logo_krieken-bier.png' alt='krieken img' />
            </ClientsBlock>
            </MainClientsBlock>
          <SeoText/>
        </div>
        const FooterMail = ({mail, mailName}) =>
        <div className="footer_mail">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.72764 4.31536C1.95534 4.47441 2.6417 4.9468 3.78677 5.73229C4.93187 6.51777 5.80909 7.12257 6.41848 7.54673C6.48543 7.59322 6.62767 7.69429 6.84527 7.85007C7.0629 8.00596 7.24374 8.13192 7.38763 8.22801C7.53163 8.32406 7.70571 8.43182 7.91005 8.5511C8.11431 8.67028 8.30686 8.75992 8.48766 8.81927C8.6685 8.8791 8.83589 8.90874 8.98989 8.90874H8.99998H9.01011C9.16411 8.90874 9.33157 8.87906 9.51241 8.81927C9.69314 8.75992 9.88586 8.67017 10.09 8.5511C10.2941 8.43168 10.4682 8.32403 10.6122 8.22801C10.7562 8.13192 10.9369 8.00596 11.1546 7.85007C11.3722 7.69415 11.5146 7.59322 11.5816 7.54673C12.1975 7.12257 13.7646 6.04534 16.2824 4.31515C16.7712 3.97722 17.1796 3.56947 17.5077 3.09217C17.836 2.61508 18 2.11458 18 1.59096C18 1.15339 17.8408 0.778832 17.5227 0.467306C17.2046 0.155711 16.8279 0 16.3928 0H1.60707C1.09148 0 0.694701 0.172323 0.4168 0.516969C0.138933 0.861685 0 1.29256 0 1.80957C0 2.22718 0.184212 2.67972 0.552461 3.16691C0.920675 3.65413 1.31253 4.03699 1.72764 4.31536ZM16.9954 5.37918C14.7992 6.85065 13.1316 7.99422 11.9933 8.80965C11.6116 9.08795 11.302 9.3052 11.0642 9.46088C10.8264 9.61666 10.5102 9.77575 10.115 9.93808C9.71998 10.1006 9.35184 10.1817 9.01026 10.1817H9.00002H8.98992C8.64841 10.1817 8.28006 10.1006 7.88503 9.93808C7.49001 9.77575 7.17355 9.61666 6.93583 9.46088C6.69817 9.3052 6.38843 9.08795 6.00678 8.80965C5.10271 8.15345 3.43868 7.0098 1.01461 5.37918C0.632817 5.12745 0.294648 4.83891 0 4.51415V12.4089C0 12.8466 0.157298 13.221 0.47207 13.5326C0.786772 13.8442 1.16519 14 1.60718 14H16.3929C16.8348 14 17.2132 13.8442 17.5279 13.5326C17.8428 13.2209 18 12.8467 18 12.4089V4.51415C17.712 4.83219 17.3773 5.12073 16.9954 5.37918Z" fill="white"/>
                    </svg>
                    <a href={mail} className="footer__mail_link">{mailName}</a>
            </div>

        const Footer = () =>
        <footer className="footer">
          <div className="footer__content">
            <Logo/>
            <div className="footer_copy-right">
                © 2019 Creative Web Production from Ukraine. Digit Factor. All rights reserved
            </div>
            <FooterMail mail='mailto:contact@digitfactor.com' mailName='contact@digitfactor.com'/>
            <div className="footer__social-link">
                <a href="https://www.facebook.com" className="social-link">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.05" fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M27.6611 16.0033L25.5024 16C23.0772 16 21.5099 17.5455 21.5099 19.9376V21.7531H19.3394C19.1519 21.7531 19 21.8993 19 22.0795V24.71C19 24.8903 19.1521 25.0363 19.3394 25.0363H21.5099V31.6738C21.5099 31.854 21.6618 32 21.8493 32H24.6812C24.8687 32 25.0206 31.8539 25.0206 31.6738V25.0363H27.5584C27.7459 25.0363 27.8978 24.8903 27.8978 24.71L27.8989 22.0795C27.8989 21.993 27.863 21.9101 27.7995 21.8488C27.7359 21.7876 27.6493 21.7531 27.5593 21.7531H25.0206V20.2141C25.0206 19.4744 25.204 19.0989 26.2065 19.0989L27.6607 19.0984C27.8481 19.0984 28 18.9522 28 18.7721V16.3296C28 16.1496 27.8483 16.0037 27.6611 16.0033Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com" className="social-link">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.05" fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M33 25.8096V32H29.3563V26.2242C29.3563 24.7733 28.8293 23.783 27.5105 23.783C26.5037 23.783 25.9045 24.4504 25.6409 25.0959C25.5448 25.3267 25.5201 25.6479 25.5201 25.9709V32H21.8752C21.8752 32 21.9243 22.2177 21.8752 21.2041H25.5197V22.7344C25.5123 22.7459 25.5027 22.7582 25.4958 22.7693H25.5197V22.7344C26.0039 21.9999 26.8687 20.9505 28.8042 20.9505C31.2023 20.9505 33 22.4935 33 25.8096ZM18.0625 16C16.8156 16 16 16.8056 16 17.8649C16 18.9012 16.792 19.7312 18.0141 19.7312H18.0385C19.3095 19.7312 20.1 18.9013 20.1 17.8649C20.076 16.8056 19.3095 16 18.0625 16ZM16.2165 32H19.86V21.2041H16.2165V32Z" fill="white"/>
                        </svg>  
                </a>                                         
            </div>
          </div>
        </footer>

  const App = () =>
    <div className="Body">
      <HeaderMobile/>
      <Header/>
      <HeadSection/>
      <Main/>
      <Footer/>
    </div>


export default App;
