// import json_1 from './configList/option.title.json'

export const configList = [
    {
        label: 'title',
        icon: 'settings',
        desc: '标题',
        children: [
            {
                label: 'title.id',
                desc: 'id',
                type: 'string',
                default: "' '",
            },
            {
                label: 'title.show',
                type: 'boolean',
                default: true,
                desc: '是否展示标题',
            },
            {
                label: 'title.text',
                type: 'string',
                default: "''",
                desc: '主标题文本',
            },
            {
                label: 'title.link',
                type: 'string',
                default: "''",
                desc: '超链接',
            },
            {
                label: 'title.target',
                type: 'string',
                default: "blank",
                desc: '指定窗口',
                option: ['blank', 'self']
            },
            {
                label: 'title.textStyle',
                icon: 'settings',
                desc: '文字样式',
                children: [
                    {
                        label: 'title.textStyle.fontStyle',
                        type: 'option',
                        default: 'normal',
                        desc: '字体的风格。',
                        option: ['normal', 'italic', 'oblique']
                    },
                    {
                        label: 'title.textStyle.fontWeight',
                        type: 'string | number',
                        default: 'bolder',
                        desc: '字体的粗细。',
                        option: ['normal', 'bold', 'bolder', 'lighter']
                    },
                    {
                        label: 'title.textStyle.fontFamily',
                        type: 'string',
                        default: 'bolder',
                        desc: '字体',
                        option: ['serif', 'monospace', 'Arial', 'Microsoft YaHei']
                    },
                    {
                        label: 'title.textStyle.fontSize',
                        type: 'number',
                        default: '18',
                        desc: '字体大小',
                    }, {
                        label: 'title.textStyle.lineHeight',
                        type: 'number',
                        default: '""',
                        desc: '行高',
                    }, {
                        label: 'title.textStyle.width',
                        type: 'number',
                        default: '""',
                        desc: '宽度',
                    }, {
                        label: 'title.textStyle.height',
                        type: 'number',
                        default: '""',
                        desc: '高度',
                    }, {
                        label: 'title.textStyle.textBorderColor',
                        type: 'string',
                        default: '""',
                        desc: '描边颜色',
                    }, {
                        label: 'title.textStyle.textBorderWidth',
                        type: 'string',
                        default: '""',
                        desc: '描边宽度',
                    }, {
                        label: 'title.textStyle.textBorderType',
                        type: 'string',
                        default: 'solid',
                        desc: '描边风格',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'title.textStyle.textBorderDashOffset',
                        type: 'string',
                        default: '""',
                        desc: '虚线偏移量',
                    }, {
                        label: 'title.textStyle.textShadowColor',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影',
                    }, {
                        label: 'title.textStyle.textShadowBlur',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影长度',
                    }, {
                        label: 'title.textStyle.textShadowOffsetX',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影X偏移',
                    }, {
                        label: 'title.textStyle.textShadowOffsetY',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影Ys偏移',
                    }, {
                        label: 'title.textStyle.overflow',
                        type: 'string',
                        default: 'none',
                        desc: '是否换行',
                        option: ['truncate', 'break', 'breakAll']
                    }, {
                        label: 'title.textStyle.ellipsis',
                        type: 'string',
                        default: 'none',
                        desc: 'truncate时，末尾显示的文本',
                    }, {
                        label: 'title.textStyle.rich',
                        type: 'string',
                        default: '""',
                        desc: '自定义富文本样式',
                    },

                ]
            },
            {
                label: 'title.subtext',
                type: 'string',
                default: "''",
                desc: '副标题文本',
            }, {
                label: 'title.sublink',
                type: 'string',
                default: "''",
                desc: '副标题文本超链接',
            }, {
                label: 'title.subtarget',
                type: 'string',
                default: "blank",
                desc: '指定窗口打开副标题超链接',
                option: ['blank', 'self']
            },
            {
                label: 'title.subtextStyle',
                icon: 'settings',
                desc: '文字样式',
                children: [
                    {
                        label: 'title.subtextStyle.color',
                        type: 'string',
                        default: '#aaa',
                        desc: '副标题颜色',
                    },
                    {
                        label: 'title.subtextStyle.fontStyle',
                        type: 'option',
                        default: 'normal',
                        desc: '字体的风格。',
                        option: ['normal', 'italic', 'oblique']
                    },
                    {
                        label: 'title.subtextStyle.fontWeight',
                        type: 'string | number',
                        default: 'bolder',
                        desc: '字体的粗细。',
                        option: ['normal', 'bold', 'bolder', 'lighter']
                    },
                    {
                        label: 'title.subtextStyle.fontFamily',
                        type: 'string',
                        default: 'bolder',
                        desc: '字体',
                        option: ['serif', 'monospace', 'Arial', 'Microsoft YaHei']
                    },
                    {
                        label: 'title.subtextStyle.fontSize',
                        type: 'number',
                        default: '18',
                        desc: '字体大小',
                    }, {
                        label: 'title.subtextStyle.lineHeight',
                        type: 'number',
                        default: '""',
                        desc: '行高',
                    }, {
                        label: 'title.subtextStyle.width',
                        type: 'number',
                        default: '""',
                        desc: '宽度',
                    }, {
                        label: 'title.subtextStyle.height',
                        type: 'number',
                        default: '""',
                        desc: '高度',
                    }, {
                        label: 'title.subtextStyle.textBorderColor',
                        type: 'string',
                        default: '""',
                        desc: '描边颜色',
                    }, {
                        label: 'title.subtextStyle.textBorderWidth',
                        type: 'string',
                        default: '""',
                        desc: '描边宽度',
                    }, {
                        label: 'title.subtextStyle.textBorderType',
                        type: 'string',
                        default: 'solid',
                        desc: '描边风格',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'title.subtextStyle.textBorderDashOffset',
                        type: 'string',
                        default: '""',
                        desc: '虚线偏移量',
                    }, {
                        label: 'title.subtextStyle.textShadowColor',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影',
                    }, {
                        label: 'title.subtextStyle.textShadowBlur',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影长度',
                    }, {
                        label: 'title.subtextStyle.textShadowOffsetX',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影X偏移',
                    }, {
                        label: 'title.subtextStyle.textShadowOffsetY',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影Ys偏移',
                    }, {
                        label: 'title.subtextStyle.overflow',
                        type: 'string',
                        default: 'none',
                        desc: '是否换行',
                        option: ['truncate', 'break', 'breakAll']
                    }, {
                        label: 'title.subtextStyle.ellipsis',
                        type: 'string',
                        default: 'none',
                        desc: 'truncate时，末尾显示的文本',
                    }, {
                        label: 'title.subtextStyle.rich',
                        type: 'string',
                        default: '""',
                        desc: '自定义富文本样式',
                    },

                ]
            },
            {
                label: 'title.textAlign',
                type: 'string',
                default: "auto",
                desc: '整体水平对齐',
                option: ['auto', 'left', 'right', 'center']
            }, {
                label: 'title.textVerticalAlign',
                type: 'string',
                default: "auto",
                desc: '整体垂直对齐',
                option: ['auto', 'top', 'bottom', 'middle']
            }, {
                label: 'title.triggerEvent',
                type: 'bool',
                default: "''",
                desc: '是否触发事件',
            }, {
                label: 'title.padding',
                type: 'number | Array',
                default: "5",
                desc: '标题内边距',
            }, {
                label: 'title.itemGap',
                type: 'number',
                default: "10",
                desc: '主副标题之间的间距',
            }, {
                label: 'title.zlevel',
                type: 'number',
                default: "''",
                desc: '所有图形的 zlevel 值',
            }, {
                label: 'title.Z',
                type: 'number',
                default: "2",
                desc: 'z相比zlevel优先级更低',
            }, {
                label: 'title.left',
                type: 'string',
                default: "auto",
                desc: '距离左侧的距离',
                option: ['20', '20%', 'left', 'center', 'right']
            }, {
                label: 'title.right',
                type: 'string',
                default: "auto",
                desc: '距离右侧的距离',
                option: ['20', '20%', 'left', 'center', 'right']
            }, {
                label: 'title.top',
                type: 'string',
                default: "auto",
                desc: '距离上侧的距离',
                option: ['20', '20%', 'top', 'middle', 'bottom']
            }, {
                label: 'title.bottom',
                type: 'string',
                default: "auto",
                desc: '距离下侧的距离',
                option: ['20', '20%', 'top', 'middle', 'bottom']
            }, {
                label: 'title.backgroundColor',
                type: 'string',
                default: "transparent",
                desc: '标题背景色',
                option: ['rgb(128, 128, 128)', '#ccc']
            }, {
                label: 'title.borderColor',
                type: 'string',
                default: "transparent",
                desc: '标题的边框颜色',
                option: ['rgb(128, 128, 128)', '#ccc']
            }, {
                label: 'title.borderRadius',
                type: 'string | array',
                default: "''",
                desc: '圆角半径',
                option: ['5', '[5, 5, 0, 0]']
            }, {
                label: 'title.shadowBlur',
                type: 'number',
                default: "''",
                desc: '图形阴影的模糊大小',
            }, {
                label: 'title.shadowColor',
                type: 'string',
                default: "''",
                desc: '阴影颜色',
            }, {
                label: 'title.shadowOffsetX',
                type: 'string',
                default: "''",
                desc: '阴影水平方向上的偏移距离',
            }, {
                label: 'title.shadowOffsetY',
                type: 'string',
                default: "''",
                desc: '阴影水平方向下的偏移距离',
            },
        ]
    },
    {
        label: 'legend',
        icon: 'settings',
        desc: '图例',
        children: [
            {
                label: 'legend.type',
                desc: '图例的类型 普通|滚动',
                type: 'string',
                default: "' '",
                option: ['plain', 'scroll']
            },
            {
                label: 'legend.id',
                desc: 'id',
                type: 'string',
                default: "' '",
            },
            {
                label: 'legend.show',
                type: 'boolean',
                default: true,
                desc: '是否展示标题',
            },
            {
                label: 'legend.Z',
                type: 'number',
                default: "2",
                desc: 'z相比zlevel优先级更低',
            }, {
                label: 'legend.left',
                type: 'string',
                default: "auto",
                desc: '距离左侧的距离',
                option: ['20', '20%', 'left', 'center', 'right']
            }, {
                label: 'legend.right',
                type: 'string',
                default: "auto",
                desc: '距离右侧的距离',
                option: ['20', '20%', 'left', 'center', 'right']
            },
            {
                label: 'legend.top',
                type: 'string',
                default: "auto",
                desc: '距离上侧的距离',
                option: ['20', '20%', 'top', 'middle', 'bottom']
            }, {
                label: 'legend.bottom',
                type: 'string',
                default: "auto",
                desc: '距离下侧的距离',
                option: ['20', '20%', 'top', 'middle', 'bottom']
            },
            {
                label: 'legend.width',
                type: 'string',
                default: "auto",
                desc: '图例组件的宽度',
            },
            {
                label: 'legend.height',
                type: 'string',
                default: "auto",
                desc: '图例组件的高度',
            },
            {
                label: 'legend.orient',
                type: 'string',
                default: "horizontal",
                desc: '图例列表的布局朝向。',
                option: ['horizontal', 'vertical']
            },
            {
                label: 'legend.align',
                type: 'string',
                default: "auto",
                desc: '图例标记和文本的对齐',
                option: ['auto', 'left', 'right']
            },
            {
                label: 'legend.padding',
                type: 'number | array',
                default: "5",
                desc: '图例内边距',
            }, {
                label: 'legend.itemGap',
                type: 'number',
                default: "10",
                desc: '图例每项之间的间隔',
            }, {
                label: 'legend.itemWidth',
                type: 'number',
                default: "25",
                desc: '图例标记的图形宽度',
            }, {
                label: 'legend.itemHeight',
                type: 'number',
                default: "14",
                desc: '图例标记的图形高度',
            },
            {
                label: 'legend.itemStyle',
                icon: 'settings',
                desc: '文字样式',
                children: [
                    {
                        label: 'legend.itemStyle.color',
                        type: 'Color',
                        default: 'normal',
                        desc: '线的颜色。',
                        option: ['rgb(255,255,255)', '#fff']
                    },
                    {
                        label: 'legend.itemStyle.borderColor',
                        type: 'string',
                        default: 'inherit',
                        desc: '图形的描边颜色',
                    },
                    {
                        label: 'legend.itemStyle.borderWidth',
                        type: 'number',
                        default: 'auto',
                        desc: '宽度',
                    },
                    {
                        label: 'legend.itemStyle.borderType',
                        type: 'string|number|Array',
                        default: 'inherit',
                        desc: '描边类型',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'legend.itemStyle.borderDashOffset',
                        type: 'number',
                        default: 'inherit',
                        desc: '线的类型',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'legend.itemStyle.borderCap ',
                        type: 'string',
                        default: 'inherit',
                        desc: '用于指定线段末端的绘制方式',
                    },
                    {
                        label: 'legend.itemStyle.borderJoin',
                        type: 'string',
                        default: 'inherit',
                        desc: '描边风格',
                        option: ['bevel', 'round', 'miter']
                    },
                    {
                        label: 'legend.itemStyle.borderMiterLimit',
                        type: 'number',
                        default: 'inherit',
                        desc: '用于设置斜接面限制比例',
                    }, {
                        label: 'legend.itemStyle.shadowBlur',
                        type: 'number',
                        default: '""',
                        desc: '图形阴影的模糊大小',
                    }, {
                        label: 'legend.itemStyle.shadowColor',
                        type: 'Color',
                        default: '""',
                        desc: '阴影颜色',
                    }, {
                        label: 'legend.itemStyle.shadowOffsetX',
                        type: 'string',
                        default: '""',
                        desc: '阴影水平方向上的偏移距离。',
                    }, {
                        label: 'legend.itemStyle.shadowOffsetY',
                        type: 'string',
                        default: '""',
                        desc: '阴影垂直方向上的偏移距离。',
                    }, {
                        label: 'legend.itemStyle.opacity',
                        type: 'number',
                        default: 'inherit',
                        desc: '图形透明度',
                    }, {
                        label: 'legend.itemStyle.decal',
                        type: 'Object',
                        default: 'inherit',
                        desc: '图形的贴花图案',
                    },
                ]
            },
            {
                label: 'legend.lineStyle',
                icon: 'settings',
                desc: '图例图形中线的样式',
                children: [
                    {
                        label: 'legend.lineStyle.color',
                        type: 'string',
                        default: 'inherit',
                        desc: '线的颜色',
                    },
                    {
                        label: 'legend.lineStyle.width',
                        type: 'number',
                        default: 'auto',
                        desc: '线宽',
                    },
                    {
                        label: 'legend.lineStyle.type',
                        type: 'string|number|Array',
                        default: 'inherit',
                        desc: '线的类型。',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'legend.lineStyle.dashOffset',
                        type: 'number',
                        default: 'bolder',
                        desc: '置虚线的偏移量',
                    },
                    {
                        label: 'legend.lineStyle.cap',
                        type: 'number',
                        default: '18',
                        desc: '制定线段末端的绘制方式',
                        option: ['butt', 'round', 'square']
                    }, {
                        label: 'legend.lineStyle.miterLimit',
                        type: 'number',
                        default: 'inherit',
                        desc: '用于设置斜接面限制比例',
                    }, {
                        label: 'legend.lineStyle.shadowBlur',
                        type: 'number',
                        default: 'inherit',
                        desc: '图形阴影的模糊大小',
                    }, {
                        label: 'legend.lineStyle.shadowColor',
                        type: 'string',
                        default: "''",
                        desc: '阴影颜色',
                    }, {
                        label: 'legend.lineStyle.shadowOffsetX',
                        type: 'string',
                        default: "''",
                        desc: '阴影水平方向上的偏移距离',
                    }, {
                        label: 'legend.lineStyle.shadowOffsetY',
                        type: 'string',
                        default: "''",
                        desc: '阴影水平方向下的偏移距离',
                    },
                    {
                        label: 'legend.lineStyle.inactiveColor',
                        type: 'Color',
                        default: "#ccc",
                        desc: '图例关闭时的线条描边颜色',
                    },
                    {
                        label: 'legend.lineStyle.inactiveWidth',
                        type: 'number',
                        default: "2",
                        desc: '图例关闭时的线条宽度',
                    },
                ]
            },

            {
                label: 'legend.symbolRotate',
                desc: '图形旋转角度',
                type: 'string',
                default: "inherit",
            }, {
                label: 'legend.formatter',
                desc: '用来格式化图例文本',
                type: 'string',
            }, {
                label: 'legend.selectedMode',
                desc: '图例选择的模式',
                type: 'bool',
                default: "true",
            }, {
                label: 'legend.inactiveColor',
                desc: '图例关闭时的描边颜色',
                type: 'Color',
                default: "'#ccc'",
            }, {
                label: 'legend.inactiveBorderColor',
                desc: '图例关闭时的描边粗细',
                type: 'Color',
                default: "'auto'",
            },
            {
                label: 'legend.textStyle',
                icon: 'settings',
                desc: '文字样式',
                children: [
                    {
                        label: 'legend.textStyle.color',
                        type: 'Color',
                        default: '""',
                        desc: '文字的颜色。',
                    },
                    {
                        label: 'legend.textStyle.fontStyle',
                        type: 'option',
                        default: 'normal',
                        desc: '字体的风格。',
                        option: ['normal', 'italic', 'oblique']
                    },
                    {
                        label: 'legend.textStyle.fontWeight',
                        type: 'string | number',
                        default: 'bolder',
                        desc: '字体的粗细。',
                        option: ['normal', 'bold', 'bolder', 'lighter']
                    },
                    {
                        label: 'legend.textStyle.fontFamily',
                        type: 'string',
                        default: 'bolder',
                        desc: '字体',
                        option: ['serif', 'monospace', 'Arial', 'Microsoft YaHei']
                    },
                    {
                        label: 'legend.textStyle.fontSize',
                        type: 'number',
                        default: '18',
                        desc: '字体大小',
                    }, {
                        label: 'legend.textStyle.lineHeight',
                        type: 'number',
                        default: '""',
                        desc: '行高',
                    }, {
                        label: 'legend.textStyle.width',
                        type: 'number',
                        default: '""',
                        desc: '宽度',
                    }, {
                        label: 'legend.textStyle.height',
                        type: 'number',
                        default: '""',
                        desc: '高度',
                    }, {
                        label: 'legend.textStyle.textBorderColor',
                        type: 'string',
                        default: '""',
                        desc: '描边颜色',
                    }, {
                        label: 'legend.textStyle.textBorderWidth',
                        type: 'string',
                        default: '""',
                        desc: '描边宽度',
                    }, {
                        label: 'legend.textStyle.textBorderType',
                        type: 'string',
                        default: 'solid',
                        desc: '描边风格',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'legend.textStyle.textBorderDashOffset',
                        type: 'string',
                        default: '""',
                        desc: '虚线偏移量',
                    }, {
                        label: 'legend.textStyle.textShadowColor',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影',
                    }, {
                        label: 'legend.textStyle.textShadowBlur',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影长度',
                    }, {
                        label: 'legend.textStyle.textShadowOffsetX',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影X偏移',
                    }, {
                        label: 'legend.textStyle.textShadowOffsetY',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影Ys偏移',
                    }, {
                        label: 'legend.textStyle.overflow',
                        type: 'string',
                        default: 'none',
                        desc: '是否换行',
                        option: ['truncate', 'break', 'breakAll']
                    }, {
                        label: 'legend.textStyle.ellipsis',
                        type: 'string',
                        default: 'none',
                        desc: 'truncate时，末尾显示的文本',
                    }, {
                        label: 'legend.textStyle.rich',
                        type: 'string',
                        default: '""',
                        desc: '自定义富文本样式',
                    },

                ]
            },
            {
                label: 'legend.tooltip',
                desc: '图例的 tooltip 配置',
                type: 'Object',
                default: "''",
            },
            {
                label: 'legend.icon',
                desc: '图例项的 icon',
                type: 'icon',
                default: "''",
            }, {
                label: 'legend.data',
                desc: '图例项的图例的数据数组',
                type: 'Array',
                default: "''",
                children: [
                    {
                        label: 'legend.data.name',
                        desc: '图例项的名称',
                        type: 'string',
                        default: "''",
                    }, {
                        label: 'legend.data.icon',
                        desc: '图例项的 icon',
                        type: 'icon',
                        default: "''",
                    },
                    {
                        label: 'legend.data.itemStyle',
                        icon: 'settings',
                        desc: '文字样式',
                        children: [
                            {
                                label: 'legend.data.itemStyle.color',
                                type: 'Color',
                                default: 'normal',
                                desc: '线的颜色。',
                                option: ['rgb(255,255,255)', '#fff']
                            },
                            {
                                label: 'legend.data.itemStyle.borderColor',
                                type: 'string',
                                default: 'inherit',
                                desc: '图形的描边颜色',
                            },
                            {
                                label: 'legend.data.itemStyle.borderWidth',
                                type: 'number',
                                default: 'auto',
                                desc: '宽度',
                            },
                            {
                                label: 'legend.data.itemStyle.borderType',
                                type: 'string|number|Array',
                                default: 'inherit',
                                desc: '描边类型',
                                option: ['solid', 'dashed', 'dotted']
                            },
                            {
                                label: 'legend.data.itemStyle.borderDashOffset',
                                type: 'number',
                                default: 'inherit',
                                desc: '线的类型',
                                option: ['solid', 'dashed', 'dotted']
                            },
                            {
                                label: 'legend.data.itemStyle.borderCap ',
                                type: 'string',
                                default: 'inherit',
                                desc: '用于指定线段末端的绘制方式',
                            },
                            {
                                label: 'legend.data.itemStyle.borderJoin',
                                type: 'string',
                                default: 'inherit',
                                desc: '描边风格',
                                option: ['bevel', 'round', 'miter']
                            },
                            {
                                label: 'legend.data.itemStyle.borderMiterLimit',
                                type: 'number',
                                default: 'inherit',
                                desc: '用于设置斜接面限制比例',
                            }, {
                                label: 'legend.data.itemStyle.shadowBlur',
                                type: 'number',
                                default: '""',
                                desc: '图形阴影的模糊大小',
                            }, {
                                label: 'legend.data.itemStyle.shadowColor',
                                type: 'Color',
                                default: '""',
                                desc: '阴影颜色',
                            }, {
                                label: 'legend.data.itemStyle.shadowOffsetX',
                                type: 'string',
                                default: '""',
                                desc: '阴影水平方向上的偏移距离。',
                            }, {
                                label: 'legend.data.itemStyle.shadowOffsetY',
                                type: 'string',
                                default: '""',
                                desc: '阴影垂直方向上的偏移距离。',
                            }, {
                                label: 'legend.data.itemStyle.opacity',
                                type: 'number',
                                default: 'inherit',
                                desc: '图形透明度',
                            }, {
                                label: 'legend.data.itemStyle.decal',
                                type: 'Object',
                                default: 'inherit',
                                desc: '图形的贴花图案',
                            },
                        ]
                    },
                    {
                        label: 'legend.data.linestyle',
                        icon: 'settings',
                        desc: '图例图形中线的样式',
                        children: [
                            {
                                label: 'legend.data.lineStyle.color',
                                type: 'string',
                                default: 'inherit',
                                desc: '线的颜色',
                            },
                            {
                                label: 'legend.data.lineStyle.width',
                                type: 'number',
                                default: 'auto',
                                desc: '线宽',
                            },
                            {
                                label: 'legend.data.lineStyle.type',
                                type: 'string|number|Array',
                                default: 'inherit',
                                desc: '线的类型。',
                                option: ['solid', 'dashed', 'dotted']
                            },
                            {
                                label: 'legend.data.lineStyle.dashOffset',
                                type: 'number',
                                default: 'bolder',
                                desc: '置虚线的偏移量',
                            },
                            {
                                label: 'legend.data.lineStyle.cap',
                                type: 'number',
                                default: '18',
                                desc: '制定线段末端的绘制方式',
                                option: ['butt', 'round', 'square']
                            }, {
                                label: 'legend.data.lineStyle.miterLimit',
                                type: 'number',
                                default: 'inherit',
                                desc: '用于设置斜接面限制比例',
                            }, {
                                label: 'legend.data.lineStyle.shadowBlur',
                                type: 'number',
                                default: 'inherit',
                                desc: '图形阴影的模糊大小',
                            }, {
                                label: 'legend.data.lineStyle.shadowColor',
                                type: 'string',
                                default: "''",
                                desc: '阴影颜色',
                            }, {
                                label: 'legend.data.lineStyle.shadowOffsetX',
                                type: 'string',
                                default: "''",
                                desc: '阴影水平方向上的偏移距离',
                            }, {
                                label: 'legend.data.lineStyle.shadowOffsetY',
                                type: 'string',
                                default: "''",
                                desc: '阴影水平方向下的偏移距离',
                            },
                            {
                                label: 'legend.data.lineStyle.inactiveColor',
                                type: 'Color',
                                default: "#ccc",
                                desc: '图例关闭时的线条描边颜色',
                            },
                            {
                                label: 'legend.data.lineStyle.inactiveWidth',
                                type: 'number',
                                default: "2",
                                desc: '图例关闭时的线条宽度',
                            },
                        ]
                    },
                    {
                        label: 'legend.data.symbolRotate',
                        desc: '图形旋转角度',
                        type: 'string',
                        default: "inherit",
                    }, {
                        label: 'legend.data.formatter',
                        desc: '用来格式化图例文本',
                        type: 'string',
                    }, {
                        label: 'legend.data.selectedMode',
                        desc: '图例选择的模式',
                        type: 'bool',
                        default: "true",
                    }, {
                        label: 'legend.data.inactiveColor',
                        desc: '图例关闭时的描边颜色',
                        type: 'Color',
                        default: "'#ccc'",
                    }, {
                        label: 'legend.data.inactiveBorderColor',
                        desc: '图例关闭时的描边粗细',
                        type: 'Color',
                        default: "'auto'",
                    },
                ]
            },
            {
                label: 'legend.data.textStyle',
                icon: 'settings',
                desc: '文字样式',
                children: [
                    {
                        label: ' legend.data.textStyle.color',
                        type: 'color',
                        default: 'normal',
                        desc: '字体的颜色。',
                    },
                    {
                        label: ' legend.data.textStyle.fontStyle',
                        type: 'option',
                        default: 'normal',
                        desc: '字体的风格。',
                        option: ['normal', 'italic', 'oblique']
                    },
                    {
                        label: 'legend.data.textStyle.fontWeight',
                        type: 'string | number',
                        default: 'bolder',
                        desc: '字体的粗细。',
                        option: ['normal', 'bold', 'bolder', 'lighter']
                    },
                    {
                        label: 'legend.data.textStyle.fontFamily',
                        type: 'string',
                        default: 'bolder',
                        desc: '字体',
                        option: ['serif', 'monospace', 'Arial', 'Microsoft YaHei']
                    },
                    {
                        label: 'legend.data.textStyle.fontSize',
                        type: 'number',
                        default: '18',
                        desc: '字体大小',
                    }, {
                        label: 'legend.data.textStyle.lineHeight',
                        type: 'number',
                        default: '""',
                        desc: '行高',
                    }, {
                        label: 'legend.data.textStyle.width',
                        type: 'number',
                        default: '""',
                        desc: '宽度',
                    }, {
                        label: 'legend.data.textStyle.height',
                        type: 'number',
                        default: '""',
                        desc: '高度',
                    }, {
                        label: 'legend.data.textStyle.textBorderColor',
                        type: 'string',
                        default: '""',
                        desc: '描边颜色',
                    }, {
                        label: 'legend.data.textStyle.textBorderWidth',
                        type: 'string',
                        default: '""',
                        desc: '描边宽度',
                    }, {
                        label: 'legend.data.textStyle.textBorderType',
                        type: 'string',
                        default: 'solid',
                        desc: '描边风格',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'legend.data.textStyle.textBorderDashOffset',
                        type: 'string',
                        default: '""',
                        desc: '虚线偏移量',
                    }, {
                        label: 'legend.data.textStyle.textShadowColor',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影',
                    }, {
                        label: 'legend.data.textStyle.textShadowBlur',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影长度',
                    }, {
                        label: 'legend.data.textStyle.textShadowOffsetX',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影X偏移',
                    }, {
                        label: 'legend.data.textStyle.textShadowOffsetY',
                        type: 'string',
                        default: '""',
                        desc: '文字阴影Ys偏移',
                    }, {
                        label: 'legend.data.textStyle.overflow',
                        type: 'string',
                        default: 'none',
                        desc: '是否换行',
                        option: ['truncate', 'break', 'breakAll']
                    }, {
                        label: 'legend.data.textStyle.ellipsis',
                        type: 'string',
                        default: 'none',
                        desc: 'truncate时，末尾显示的文本',
                    },

                ]
            },
            {
                label: 'legend.backgroundColor',
                desc: '图例背景色',
                type: 'icon',
                default: "transparent",
            }, {
                label: 'legend.borderColor',
                desc: '图例的边框颜色',
                type: 'Color',
                default: "'#ccc'",
            }, {
                label: 'legend.borderWidth',
                desc: '图例的边框线宽。',
                type: 'number',
                default: "1",
            },
            {
                label: 'legend.borderRadius',
                type: 'string | array',
                default: "''",
                desc: '圆角半径',
                option: ['5', '[5, 5, 0, 0]']
            }, {
                label: 'legend.shadowBlur',
                type: 'number',
                default: "''",
                desc: '图形阴影的模糊大小',
            }, {
                label: 'legend.shadowColor',
                type: 'string',
                default: "''",
                desc: '阴影颜色',
            }, {
                label: 'legend.shadowOffsetX',
                type: 'string',
                default: "''",
                desc: '阴影水平方向上的偏移距离',
            }, {
                label: 'legend.shadowOffsetY',
                type: 'string',
                default: "''",
                desc: '阴影水平方向下的偏移距离',
            }, {
                label: 'legend.scrollDataIndex',
                type: 'number',
                default: "''",
                desc: '图例当前最左上显示项的 dataIndex。',
            },
        ]
    },
    {
        label: 'gird',
        icon: 'settings',
        desc: '直角坐标系内绘图网格',
        children: [
            {
                label: 'gird.id',
                desc: 'id',
                type: 'string',
                default: "' '",
            },
            {
                label: 'gird.show',
                type: 'boolean',
                default: true,
                desc: '是否展示标题',
            },
            {
                label: 'gird.zlevel',
                type: 'number',
                default: "''",
                desc: '所有图形的 zlevel 值',
            }, {
                label: 'gird.Z',
                type: 'number',
                default: "2",
                desc: 'z相比zlevel优先级更低',
            }, {
                label: 'gird.left',
                type: 'string',
                default: "auto",
                desc: '距离左侧的距离',
                option: ['20', '20%', 'left', 'center', 'right']
            }, {
                label: 'gird.right',
                type: 'string',
                default: "auto",
                desc: '距离右侧的距离',
                option: ['20', '20%', 'left', 'center', 'right']
            }, {
                label: 'gird.top',
                type: 'string',
                default: "auto",
                desc: '距离上侧的距离',
                option: ['20', '20%', 'top', 'middle', 'bottom']
            }, {
                label: 'gird.bottom',
                type: 'string',
                default: "auto",
                desc: '距离下侧的距离',
                option: ['20', '20%', 'top', 'middle', 'bottom']
            },
            {
                label: 'gird.width',
                type: 'string',
                default: "auto",
                desc: '图例组件的宽度',
            },
            {
                label: 'gird.height',
                type: 'string',
                default: "auto",
                desc: '图例组件的高度',
            }, {
                label: 'gird.containLabel',
                type: 'bool',
                default: "''",
                desc: 'grid 区域是否包含坐标轴的刻度标签',
            },
            {
                label: 'gird.backgroundColor',
                type: 'string',
                default: "transparent",
                desc: '标题背景色',
                option: ['rgb(128, 128, 128)', '#ccc']
            }, {
                label: 'gird.borderColor',
                type: 'string',
                default: "transparent",
                desc: '标题的边框颜色',
                option: ['rgb(128, 128, 128)', '#ccc']
            }, {
                label: 'gird.borderRadius',
                type: 'string | array',
                default: "''",
                desc: '圆角半径',
                option: ['5', '[5, 5, 0, 0]']
            }, {
                label: 'gird.shadowBlur',
                type: 'number',
                default: "''",
                desc: '图形阴影的模糊大小',
            }, {
                label: 'gird.shadowColor',
                type: 'string',
                default: "''",
                desc: '阴影颜色',
            }, {
                label: 'gird.shadowOffsetX',
                type: 'string',
                default: "''",
                desc: '阴影水平方向上的偏移距离',
            }, {
                label: 'gird.shadowOffsetY',
                type: 'string',
                default: "''",
                desc: '阴影水平方向下的偏移距离',
            }, {
                label: 'gird.tooltip',
                desc: '图例的 tooltip 配置',
                type: 'Object',
                default: "''",
            },
        ]
    }
];