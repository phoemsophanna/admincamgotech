import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import Profile from "./auth/profile/reducer";
import ChangePwdUser from "./auth/changepwd/reducer";
// File Storage
import FileStorage from "./fileStorage/reducer";
// User Management
import UserListReducer from "./user/list/reducer";
import CreateUserReducer from "./user/create/reducer";
import UserDetailReducer from "./user/detail/reducer";
import ServiceListReducer from "./service/list/reducer";
import CreateServiceReducer from "./service/create/reducer";
import ServiceDetailReducer from "./service/detail/reducer";
import PerformanceListReducer from "./performance/list/reducer";
import CreatePerformanceReducer from "./performance/create/reducer";
import PerformanceDetailReducer from "./performance/detail/reducer";
import NewsListReducer from "./news/list/reducer";
import CreateNewsReducer from "./news/create/reducer";
import NewsDetailReducer from "./news/detail/reducer";
import ProjectCategoryListReducer from "./projectCategory/list/reducer";
import CreateProjectCategoryReducer from "./projectCategory/create/reducer";
import ProjectCategoryDetailReducer from "./projectCategory/detail/reducer";
import ProjectListReducer from "./project/list/reducer";
import CreateProjectReducer from "./project/create/reducer";
import ProjectDetailReducer from "./project/detail/reducer";
import WebHostingListReducer from "./webHosting/list/reducer";
import CreateWebHostingReducer from "./webHosting/create/reducer";
import WebHostingDetailReducer from "./webHosting/detail/reducer";
import TestimonialListReducer from "./testimonial/list/reducer";
import CreateTestimonialReducer from "./testimonial/create/reducer";
import TestimonialDetailReducer from "./testimonial/detail/reducer";
import TechnologyListReducer from "./technology/list/reducer";
import CreateTechnologyReducer from "./technology/create/reducer";
import TechnologyDetailReducer from "./technology/detail/reducer";
import BannerListReducer from "./banner/list/reducer";
import CreateBannerReducer from "./banner/create/reducer";
import BannerDetailReducer from "./banner/detail/reducer";
import SkillsetListReducer from "./skillset/list/reducer";
import CreateSkillsetReducer from "./skillset/create/reducer";
import SkillsetDetailReducer from "./skillset/detail/reducer";
import FaqListReducer from "./faq/list/reducer";
import CreateFaqReducer from "./faq/create/reducer";
import FaqDetailReducer from "./faq/detail/reducer";
import CareerListReducer from "./career/list/reducer";
import CreateCareerReducer from "./career/create/reducer";
import CareerDetailReducer from "./career/detail/reducer";
import SiteSettingReducer from "./siteSetting/reducer";
import PageBannerListReducer from "./pageBanner/list/reducer";
import CreatePageBannerReducer from "./pageBanner/create/reducer";
import PageBannerDetailReducer from "./pageBanner/detail/reducer";
import PerformanceTypeListReducer from "./performanceType/list/reducer";
import CreatePerformanceTypeReducer from "./performanceType/create/reducer";
import PerformanceTypeDetailReducer from "./performanceType/detail/reducer";
import DefaultPlanListReducer from "./defaultPlan/list/reducer";
import CreateDefaultPlanReducer from "./defaultPlan/create/reducer";
import DefaultPlanDetailReducer from "./defaultPlan/detail/reducer";

const rootReducer = combineReducers({
	// public
	Layout,
	Login,
	Account,
	Profile,
	ChangePwdUser,
	FileStorage,
	// Management
	UserListReducer,
	CreateUserReducer,
	UserDetailReducer,
	// Service
	ServiceListReducer,
	CreateServiceReducer,
	ServiceDetailReducer,
	PerformanceListReducer,
	CreatePerformanceReducer,
	PerformanceDetailReducer,
	NewsListReducer,
	CreateNewsReducer,
	NewsDetailReducer,
	ProjectCategoryListReducer,
	CreateProjectCategoryReducer,
	ProjectCategoryDetailReducer,
	ProjectListReducer,
	CreateProjectReducer,
	ProjectDetailReducer,
	WebHostingListReducer,
	CreateWebHostingReducer,
	WebHostingDetailReducer,
	TestimonialListReducer,
	CreateTestimonialReducer,
	TestimonialDetailReducer,
	TechnologyListReducer,
	CreateTechnologyReducer,
	TechnologyDetailReducer,
	BannerListReducer,
	CreateBannerReducer,
	BannerDetailReducer,
	SkillsetListReducer,
	CreateSkillsetReducer,
	SkillsetDetailReducer,
	FaqListReducer,
	CreateFaqReducer,
	FaqDetailReducer,
	CareerListReducer,
	CreateCareerReducer,
	CareerDetailReducer,
	SiteSettingReducer,
	PageBannerListReducer,
	CreatePageBannerReducer,
	PageBannerDetailReducer,
	PerformanceTypeListReducer,
	CreatePerformanceTypeReducer,
	PerformanceTypeDetailReducer,
	DefaultPlanListReducer,
	CreateDefaultPlanReducer,
	DefaultPlanDetailReducer,
});

export default rootReducer;
