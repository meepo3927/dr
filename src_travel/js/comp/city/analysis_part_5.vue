<template>
<div class="analysis-part height-flex">
	<!-- 日期选择 -->
	<div class="datepicker-box x-head">
		<label>选择日期：</label>
		<datepicker :value="startDatetime" @input="onStartDateInput($event)" />
	</div>
	<div class="x-body ">
		<div class="box-1">
			<my-chart :o="o1" ref="c1" />
		</div>
		<div class="box-2">
			<my-chart :o="o2" ref="c2" />
		</div>
	</div>
</div>
</template>

<script>
import request from 'util/request';
import chartUtil from 'util/chart';
import MDate from 'lib/mdate.js';
import config from 'global/config';

var DateUtil = MDate.Util;
var methods = {};
methods.render = function () {
};
methods.getRequestParam = function () {
	// 只有一个日期
    return [this.id, this.startDatetime, null, config.user.id];
};

methods.render1 = function () {
	return this.autoTryWrapper(() => {
		let param = this.getRequestParam();
		let p1_pie = request.cityRptNmComeGPRSLevDailyPie(...param);
		let p1_bar = request.cityRptNmComeGPRSLevDailyBar(...param);
		let p2_pie = request.cityRptNmComeGSMLevDailyPie(...param);
		let p2_bar = request.cityRptNmComeGSMLevDailyBar(...param);
		let req1 = this.renderGPRS({
			pieRequest: p1_pie,
			barRequest: p1_bar
		});
		let req2 = this.renderGSM({
			pieRequest: p2_pie,
			barRequest: p2_bar
		});
		return req1;
	}, () => {
	});
};

methods.fetchRender = function () {
	var m = 'render' + this.type;
	this[m] && this.$nextTick(this[m]);
};

var computed = {};
computed.gprsTitlePrefix = function () {
	return '';
};
var mounted = function () {
	this.fetchRender();
	this.$on('onDateChange', function () {
		this.fetchRender();
	});
};
const beforeDestroy = function () {};
let dataFunc = function () {
	var date = new Date();
	var startDate = DateUtil.getDateOffset(date, -1);
	var o = {
		type: 1,
		startDatetime:  DateUtil.getYMD(startDate)
	};
	return o;
};
export default {
	data: dataFunc,
	methods,
	computed,
	props: [],
	mounted,
	mixins: [
		require('mixins/analysis_part.js'),
		require('comp/chart_layer/gprs_gsm_lev_mix.js')
	],
	beforeDestroy,
	components: {}
};
</script>

<style scoped lang="less">
.box-1 {
	height: 50%;
	padding-bottom: 7px;
}
.box-2 {
	height: 50%;
	padding-top: 7px;
}
</style>