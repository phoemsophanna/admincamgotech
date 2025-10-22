import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
//Auth
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ProfileSaga from "./auth/profile/saga";
import ChangePwdSaga from "./auth/changepwd/saga";
import FileStorageSaga from "./fileStorage/saga";
// User Management
import UserListSaga from "./user/list/saga";
import CreateUserMainSaga from "./user/create/saga";
import UserDetailSaga from "./user/detail/saga";
import ServiceListSaga from "./service/list/saga";
import CreateServiceMainSaga from "./service/create/saga";
import ServiceDetailSaga from "./service/detail/saga";
import PerformanceListSaga from "./performance/list/saga";
import CreatePerformanceMainSaga from "./performance/create/saga";
import PerformanceDetailSaga from "./performance/detail/saga";
import NewsListSaga from "./news/list/saga";
import CreateNewsMainSaga from "./news/create/saga";
import NewsDetailSaga from "./news/detail/saga";
import ProjectCategoryListSaga from "./projectCategory/list/saga";
import CreateProjectCategoryMainSaga from "./projectCategory/create/saga";
import ProjectCategoryDetailSaga from "./projectCategory/detail/saga";
import ProjectListSaga from "./project/list/saga";
import CreateProjectMainSaga from "./project/create/saga";
import ProjectDetailSaga from "./project/detail/saga";
import WebHostingListSaga from "./webHosting/list/saga";
import CreateWebHostingMainSaga from "./webHosting/create/saga";
import WebHostingDetailSaga from "./webHosting/detail/saga";
import PerformanceTypeListSaga from "./performanceType/list/saga";
import CreatePerformanceTypeMainSaga from "./performanceType/create/saga";
import PerformanceTypeDetailSaga from "./performanceType/detail/saga";
import DefaultPlanListSaga from "./defaultPlan/list/saga";
import CreateDefaultPlanMainSaga from "./defaultPlan/create/saga";
import DefaultPlanDetailSaga from "./defaultPlan/detail/saga";
import TestimonialListSaga from "./testimonial/list/saga";
import CreateTestimonialMainSaga from "./testimonial/create/saga";
import TestimonialDetailSaga from "./testimonial/detail/saga";
import TechnologyListSaga from "./technology/list/saga";
import CreateTechnologyMainSaga from "./technology/create/saga";
import TechnologyDetailSaga from "./technology/detail/saga";
import BannerListSaga from "./banner/list/saga";
import CreateBannerMainSaga from "./banner/create/saga";
import BannerDetailSaga from "./banner/detail/saga";
import SkillsetListSaga from "./skillset/list/saga";
import CreateSkillsetMainSaga from "./skillset/create/saga";
import SkillsetDetailSaga from "./skillset/detail/saga";
import FaqListSaga from "./faq/list/saga";
import CreateFaqMainSaga from "./faq/create/saga";
import FaqDetailSaga from "./faq/detail/saga";
import CareerListSaga from "./career/list/saga";
import CreateCareerMainSaga from "./career/create/saga";
import CareerDetailSaga from "./career/detail/saga";
import PageBannerListSaga from "./pageBanner/list/saga";
import CreatePageBannerMainSaga from "./pageBanner/create/saga";
import PageBannerDetailSaga from "./pageBanner/detail/saga";
import SiteSettingSaga from "./siteSetting/saga";

export default function* rootSaga() {
	yield all([
		//public
		fork(LayoutSaga),
		fork(AccountSaga),
		fork(AuthSaga),
		fork(ProfileSaga),
		fork(ChangePwdSaga),
		fork(FileStorageSaga),
		fork(UserListSaga),
		fork(CreateUserMainSaga),
		fork(UserDetailSaga),
		fork(ServiceListSaga),
		fork(CreateServiceMainSaga),
		fork(ServiceDetailSaga),
		fork(PerformanceListSaga),
		fork(CreatePerformanceMainSaga),
		fork(PerformanceDetailSaga),
		fork(NewsListSaga),
		fork(CreateNewsMainSaga),
		fork(NewsDetailSaga),
		fork(ProjectCategoryListSaga),
		fork(CreateProjectCategoryMainSaga),
		fork(ProjectCategoryDetailSaga),
		fork(ProjectListSaga),
		fork(CreateProjectMainSaga),
		fork(ProjectDetailSaga),
		fork(WebHostingListSaga),
		fork(CreateWebHostingMainSaga),
		fork(WebHostingDetailSaga),
		fork(PerformanceTypeListSaga),
		fork(CreatePerformanceTypeMainSaga),
		fork(PerformanceTypeDetailSaga),
		fork(DefaultPlanListSaga),
		fork(CreateDefaultPlanMainSaga),
		fork(DefaultPlanDetailSaga),
		fork(TestimonialListSaga),
		fork(CreateTestimonialMainSaga),
		fork(TestimonialDetailSaga),
		fork(TechnologyListSaga),
		fork(CreateTechnologyMainSaga),
		fork(TechnologyDetailSaga),
		fork(BannerListSaga),
		fork(CreateBannerMainSaga),
		fork(BannerDetailSaga),
		fork(SkillsetListSaga),
		fork(CreateSkillsetMainSaga),
		fork(SkillsetDetailSaga),
		fork(FaqListSaga),
		fork(CreateFaqMainSaga),
		fork(FaqDetailSaga),
		fork(CareerListSaga),
		fork(CreateCareerMainSaga),
		fork(CareerDetailSaga),
		fork(PageBannerListSaga),
		fork(CreatePageBannerMainSaga),
		fork(PageBannerDetailSaga),
		fork(SiteSettingSaga),
	]);
}
