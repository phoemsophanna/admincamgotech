import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import Dashboard from "../pages/Pages/Dashboard/Dashboard";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";

//pages
import Starter from "../pages/Pages/Starter/Starter";
import Maintenance from "../pages/Pages/Maintenance/Maintenance";
import ComingSoon from "../pages/Pages/ComingSoon/ComingSoon";
import Slideshow from "../pages/Pages/Slideshow/Slideshow";
import User from "../pages/Pages/User/User";
import ServiceMenu from "../pages/Pages/Service";
import ServiceForm from "../pages/Pages/Service/ServiceForm";
import PerformanceMenu from "../pages/Pages/Performance";
import PerformanceForm from "../pages/Pages/Performance/PerformanceForm";
import NewsMenu from "../pages/Pages/News";
import NewsForm from "../pages/Pages/News/NewsForm";
import ProjectCategory from "../pages/Pages/ProjectCategory/ProjectCategory";
import ProjectMenu from "../pages/Pages/Project";
import ProjectForm from "../pages/Pages/Project/ProjectForm";
import WebHosting from "../pages/Pages/WebHosting/WebHosting";
import Testimonial from "../pages/Pages/Testimonial/Testimonial";
import Technology from "../pages/Pages/Technology/Technology";
import BannerMenu from "../pages/Pages/Banner";
import BannerForm from "../pages/Pages/Banner/BannerForm";
import Skillset from "../pages/Pages/Skillset/Skillset";
import Faq from "../pages/Pages/Faq/Faq";
import AboutCompany from "../pages/Pages/SiteSetting/AboutCompany";
import Whoweare from "../pages/Pages/SiteSetting/Whoweare";
import OurGoal from "../pages/Pages/SiteSetting/OurGoal";
import SiteService from "../pages/Pages/SiteSetting/SiteService";
import WhyChooseUs from "../pages/Pages/SiteSetting/WhyChooseUs";
import SiteProject from "../pages/Pages/SiteSetting/SiteProject";
import SiteTestimonial from "../pages/Pages/SiteSetting/SiteTestimonial";
import SiteWebHosting from "../pages/Pages/SiteSetting/SiteWebHosting";
import TechNews from "../pages/Pages/SiteSetting/TechNews";
import ContactUs from "../pages/Pages/SiteSetting/ContactUs";
import SiteSkillset from "../pages/Pages/SiteSetting/SiteSkillset";
import CareerMenu from "../pages/Pages/Career";
import CareerForm from "../pages/Pages/Career/CareerForm";
import PageBanner from "../pages/Pages/PageBanner/PageBanner";
import TermOfService from "../pages/Pages/SiteSetting/TermOfService";
import PrivacyPolicy from "../pages/Pages/SiteSetting/PrivacyPolicy";
import PerformanceType from "../pages/Pages/WebHosting/PerformanceType";
import DefaultPlan from "../pages/Pages/WebHosting/DefaultPlan";

const authProtectedRoutes = [
	{ path: "/dashboard", component: <Dashboard /> },
	{ path: "/index", component: <Dashboard /> },

	//User Profile
	{ path: "/profile", component: <UserProfile /> },

	// Menu
	{ path: "/slideshow", component: <Slideshow /> },

	//Pages
	{ path: "/pages-starter", component: <Starter /> },

	//Management
	{ path: "/user-management", component: <User /> },
	{ path: "/service-menu", component: <ServiceMenu /> },
	{ path: "/service-menu/create", component: <ServiceForm /> },
	{ path: "/service-menu/edit/:id", component: <ServiceForm /> },
	{ path: "/performance-menu", component: <PerformanceMenu /> },
	{ path: "/performance-menu/create", component: <PerformanceForm /> },
	{ path: "/performance-menu/edit/:id", component: <PerformanceForm /> },
	{ path: "/news-menu", component: <NewsMenu /> },
	{ path: "/news-menu/create", component: <NewsForm /> },
	{ path: "/news-menu/edit/:id", component: <NewsForm /> },
	{ path: "/project-category", component: <ProjectCategory /> },
	{ path: "/project-menu", component: <ProjectMenu /> },
	{ path: "/project-menu/create", component: <ProjectForm /> },
	{ path: "/project-menu/edit/:id", component: <ProjectForm /> },
	{ path: "/hosting", component: <WebHosting /> },
	{ path: "/hosting/performance-type", component: <PerformanceType /> },
	{ path: "/hosting/default-plan", component: <DefaultPlan /> },
	{ path: "/testimonial", component: <Testimonial /> },
	{ path: "/technology", component: <Technology /> },
	{ path: "/page-banner", component: <PageBanner /> },
	{ path: "/skillset", component: <Skillset /> },
	{ path: "/faq", component: <Faq /> },
	{ path: "/career-menu", component: <CareerMenu /> },
	{ path: "/career-menu/create", component: <CareerForm /> },
	{ path: "/career-menu/edit/:id", component: <CareerForm /> },
	{ path: "/banner-menu", component: <BannerMenu /> },
	{ path: "/banner-menu/create", component: <BannerForm /> },
	{ path: "/banner-menu/edit/:id", component: <BannerForm /> },
	{ path: "/site-setting/about-company", component: <AboutCompany /> },
	{ path: "/site-setting/who-we-are", component: <Whoweare /> },
	{ path: "/site-setting/our-goal", component: <OurGoal /> },
	{ path: "/site-setting/service", component: <SiteService /> },
	{ path: "/site-setting/why-choose-us", component: <WhyChooseUs /> },
	{ path: "/site-setting/project", component: <SiteProject /> },
	{ path: "/site-setting/testimonial", component: <SiteTestimonial /> },
	{ path: "/site-setting/web-hosting", component: <SiteWebHosting /> },
	{ path: "/site-setting/tech-news", component: <TechNews /> },
	{ path: "/site-setting/contact-us", component: <ContactUs /> },
	{ path: "/site-setting/skillset", component: <SiteSkillset /> },
	{ path: "/term-service", component: <TermOfService /> },
	{ path: "/privacy-policy", component: <PrivacyPolicy /> },

	// this route should be at the end of all other routes
	// eslint-disable-next-line react/display-name
	{
		path: "/",
		exact: true,
		component: <Navigate to="/dashboard" />,
	},
	{ path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
	// Authentication Page
	{ path: "/logout", component: <Logout /> },
	{ path: "/login", component: <Login /> },
	{ path: "/forgot-password", component: <ForgetPasswordPage /> },
	{ path: "/register", component: <Register /> },

	//AuthenticationInner pages
	{ path: "/pages-maintenance", component: <Maintenance /> },
	{ path: "/pages-coming-soon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
