import React from "react";

const Navdata = () => {
	const menuItems = [
		{
			label: "Menu",
			isHeader: true,
		},
		{
			id: "dashboard",
			label: "Dashboard",
			icon: "mdi mdi-speedometer",
			link: "/dashboard",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "banner-menu",
			label: "Banner",
			icon: "mdi mdi-play-box-outline",
			link: "/banner-menu",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "service",
			label: "Service",
			icon: "mdi mdi-folder-check-outline",
			link: "/service-menu",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "project-category",
			label: "Project Category",
			icon: "mdi mdi-shape-plus",
			link: "/project-category",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "project",
			label: "Project",
			icon: "mdi mdi-briefcase-variant-outline",
			link: "/project-menu",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "performance-menu",
			label: "Performance",
			icon: "mdi mdi-bullseye-arrow",
			link: "/performance-menu",
			click: function (e) {
				e.preventDefault();
			},
		},

		{
			id: "hosting",
			label: "Web Hosting",
			icon: "mdi mdi-server-network",
			link: "/hosting",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "news-menu",
			label: "News",
			icon: "mdi mdi-newspaper-variant-multiple",
			link: "/news-menu",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "technology",
			label: "Technology",
			icon: "mdi mdi-xml",
			link: "/technology",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "skillset",
			label: "Skillset",
			icon: "mdi mdi-format-list-checkbox",
			link: "/skillset",
			click: function (e) {
				e.preventDefault();
			},
		},

		{
			label: "pages",
			isHeader: true,
		},
		{
			id: "testimonial",
			label: "Testimonial",
			icon: "mdi mdi-comment-quote-outline",
			link: "/testimonial",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "faq",
			label: "Faq",
			icon: "mdi mdi-help-circle-outline",
			link: "/faq",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "career",
			label: "Career",
			icon: "mdi mdi-briefcase-variant",
			link: "/career-menu",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "term-service",
			label: "Term of Service",
			icon: "mdi mdi-text-box-search-outline",
			link: "/term-service",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "privacy-policy",
			label: "Privacy Policy",
			icon: "mdi mdi-text-box-check-outline",
			link: "/privacy-policy",
			click: function (e) {
				e.preventDefault();
			},
		},

		{
			label: "Management",
			isHeader: true,
		},
		{
			id: "site-setting",
			label: "Site Setting",
			icon: "mdi mdi-tune",
			link: "/site-setting/about-company",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "page-banner",
			label: "Page Setting",
			icon: "mdi mdi-image-album",
			link: "/page-banner",
			click: function (e) {
				e.preventDefault();
			},
		},
		{
			id: "user",
			label: "User",
			icon: "mdi mdi-account-group",
			link: "/user-management",
			click: function (e) {
				e.preventDefault();
			},
		},
	];
	return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
