import title from './configList/option.title.json'
import legend from './configList/option.legend.json'
import gird from './configList/option.grid.json'
import xAxis from './configList/option.xAxis.json'
import yAxis from './configList/option.yAxis.json'
import polar from './configList/option.polar.json'
import radiusAxis from './configList/option.radiusAxis.json'
import angleAxis from './configList/option.angleAxis.json'
import radar from './configList/option.radar.json'
import dataZoomInside from './configList/option.dataZoom-inside.json'
import dataZoomSlider from './configList/option.dataZoom-slider.json'
import tooltip from './configList/option.tooltip.json'
import axisPointer from './configList/option.axisPointer.json'
import toolbox from './configList/option.toolbox.json'
import brush from './configList/option.brush.json'
import geo from './configList/option.geo.json'
import parallel from './configList/option.parallel.json'
import parallelAxis from './configList/option.parallelAxis.json'
import singleAxis from './configList/option.singleAxis.json'
import timeline from './configList/option.timeline.json'
import graphic from './configList/option.graphic.json'
import calendar from './configList/option.calendar.json'
import dataset from './configList/option.dataset.json'
import aria from './configList/option.aria.json'
import textStyle from './configList/option.textStyle.json'

export const configList = [
    {
        label: 'title',
        icon: 'settings',
        desc: '标题',
        children: title
    }, {
        label: 'legend',
        icon: 'settings',
        desc: '图例',
        children: legend
    }, {
        label: 'gird',
        icon: 'settings',
        desc: '绘图网格',
        children: gird
    }, {
        label: 'xAxis',
        icon: 'settings',
        desc: 'X轴',
        children: xAxis
    }, {
        label: 'yAxis',
        icon: 'settings',
        desc: 'Y轴',
        children: yAxis
    }, {
        label: 'polar',
        icon: 'settings',
        desc: '标题',
        children: polar
    }, {
        label: 'radiusAxis',
        icon: 'settings',
        desc: '标题',
        children: radiusAxis
    }, {
        label: 'title',
        icon: 'settings',
        desc: '极坐标系的径向轴',
        children: angleAxis
    }, {
        label: 'radar',
        icon: 'settings',
        desc: '雷达图',
        children: radar
    }, {
        label: 'dataZoom',
        icon: 'settings',
        desc: '区域缩放',
        children: [...dataZoomInside, ...dataZoomSlider]
    }, {
        label: 'tooltip',
        icon: 'settings',
        desc: '提示框组件',
        children: tooltip
    }, {
        label: 'axisPointer',
        icon: 'settings',
        desc: '坐标轴指示器',
        children: axisPointer
    }, {
        label: 'toolbox',
        icon: 'settings',
        desc: '工具栏',
        children: toolbox
    }, {
        label: 'brush',
        icon: 'settings',
        desc: '区域选择组件',
        children: brush
    }, {
        label: 'geo',
        icon: 'settings',
        desc: '地理坐标系组件',
        children: geo
    }, {
        label: 'parallel',
        icon: 'settings',
        desc: '平行坐标系',
        children: parallel
    }, {
        label: 'parallelAxis',
        icon: 'settings',
        desc: '平行坐标系中的坐标轴',
        children: parallelAxis
    }, {
        label: 'singleAxis',
        icon: 'settings',
        desc: '单轴',
        children: singleAxis
    }, {
        label: 'timeline',
        icon: 'settings',
        desc: 'timeline 组件',
        children: timeline
    }, {
        label: 'graphic',
        icon: 'settings',
        desc: '生图形元素组件',
        children: graphic
    }, {
        label: 'calendar',
        icon: 'settings',
        desc: '日历坐标系组件',
        children: calendar
    }, {
        label: 'dataset',
        icon: 'settings',
        desc: '数据集',
        children: dataset
    }, {
        label: 'aria',
        icon: 'settings',
        desc: '无障碍',
        children: aria
    }, {
        label: 'textStyle',
        icon: 'settings',
        desc: '全局的字体样式',
        children: textStyle
    },
];