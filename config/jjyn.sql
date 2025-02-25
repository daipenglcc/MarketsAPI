/*
 Navicat Premium Dump SQL

 Source Server         : 腾讯云数据库
 Source Server Type    : MySQL
 Source Server Version : 50718 (5.7.18-cynos-2.1.13-log)
 Source Host           : sh-cynosdbmysql-grp-47s5ew9e.sql.tencentcdb.com:28307
 Source Schema         : jjyn

 Target Server Type    : MySQL
 Target Server Version : 50718 (5.7.18-cynos-2.1.13-log)
 File Encoding         : 65001

 Date: 25/02/2025 17:00:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for areas
-- ----------------------------
DROP TABLE IF EXISTS `areas`;
CREATE TABLE `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of areas
-- ----------------------------
BEGIN;
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (1, '历下区', '2025-02-08 17:17:51', '2025-02-15 10:35:41');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (2, '天桥区', '2025-02-08 17:18:34', '2025-02-08 17:18:34');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (3, '市中区', '2025-02-08 17:24:00', '2025-02-08 17:24:00');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (9, '历城区', '2025-02-10 07:32:59', '2025-02-10 07:32:59');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (10, '南部山区', '2025-02-10 07:34:21', '2025-02-10 07:34:21');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (11, '槐荫区', '2025-02-10 07:34:48', '2025-02-10 07:34:48');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (12, '章丘区', '2025-02-10 07:34:58', '2025-02-10 07:34:58');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (13, '长清区', '2025-02-10 07:35:04', '2025-02-10 07:35:04');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (14, '莱芜区', '2025-02-10 07:35:10', '2025-02-10 07:35:10');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (15, '钢城区', '2025-02-10 07:35:15', '2025-02-10 07:35:15');
INSERT INTO `areas` (`id`, `title`, `created_at`, `updated_at`) VALUES (16, '平阴县', '2025-02-10 07:35:21', '2025-02-10 07:35:21');
COMMIT;

-- ----------------------------
-- Table structure for banners
-- ----------------------------
DROP TABLE IF EXISTS `banners`;
CREATE TABLE `banners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `media_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `url` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='周一到周天的 banner 图';

-- ----------------------------
-- Records of banners
-- ----------------------------
BEGIN;
INSERT INTO `banners` (`id`, `media_id`, `name`, `url`) VALUES (1, 'xiWEbz3LGTAp4Uf9H93AyhUTGZOfhYpqNJRKNeqbK8ucs2xNcu3rmk6qqahfMxmS', '周日', 'https://mmbiz.qpic.cn/mmbiz_png/7XkntTQOU7VYNhydhLuJobFRicPa4F6o1mv7DNLY2Zc3g6zj8CYMVbAQcmslicSNBGC5ickPG8WTjicfPEadWJ2K8w/0?wx_fmt=png&from=appmsg');
INSERT INTO `banners` (`id`, `media_id`, `name`, `url`) VALUES (2, 'xiWEbz3LGTAp4Uf9H93Ayj9eD81XkaRYC8AiYfo0jPjuTzCyCDEJ1vLNEA0SsevA', '周六', 'https://mmbiz.qpic.cn/mmbiz_png/7XkntTQOU7VYNhydhLuJobFRicPa4F6o1gzRIJd6fTxEQYfkz3Wzj3OUWJJTuAfbs9RfLYl8NhbT78hZF6RENgw/0?wx_fmt=png&from=appmsg');
INSERT INTO `banners` (`id`, `media_id`, `name`, `url`) VALUES (3, 'xiWEbz3LGTAp4Uf9H93Ayj-TxevuqN_NZwASPJcXqx5OQyigfDAhSQ85rLHhnLi1', '周五', 'https://mmbiz.qpic.cn/mmbiz_png/7XkntTQOU7VYNhydhLuJobFRicPa4F6o1wUeSngd8w1H9UegFGLRXLiaPVgwLbJxkCeeOcrdlDQAWmclUP8lQs0g/0?wx_fmt=png&from=appmsg');
INSERT INTO `banners` (`id`, `media_id`, `name`, `url`) VALUES (4, 'xiWEbz3LGTAp4Uf9H93Ayl3RqCt6NHSfv-PTgBs2e9BGLfs0R3QrVyjY9sQoWpLW', '周四', 'https://mmbiz.qpic.cn/mmbiz_png/7XkntTQOU7VYNhydhLuJobFRicPa4F6o1tv49aCe7odsb1tEPAJeib0VoFr9CYlibEWfsAJk4yL0xbl1RWRK3PnBw/0?wx_fmt=png&from=appmsg');
INSERT INTO `banners` (`id`, `media_id`, `name`, `url`) VALUES (5, 'xiWEbz3LGTAp4Uf9H93AyhrzAKbRz4fKJ3UhxLVoYQb6VrEL2UCG7bCMq-FguTAx', '周三', 'https://mmbiz.qpic.cn/mmbiz_png/7XkntTQOU7VYNhydhLuJobFRicPa4F6o1PkCp8eqeQxrqS4Pa9vo0qFrDlmgVBXUP6RDEwCnMicWK8vdZ79y5Y5g/0?wx_fmt=png&from=appmsg');
INSERT INTO `banners` (`id`, `media_id`, `name`, `url`) VALUES (6, 'xiWEbz3LGTAp4Uf9H93Aypm0VDWZATsRHjt4HCelifLvt0mRH7s4eq1wFpubrTKv', '周二', 'https://mmbiz.qpic.cn/mmbiz_png/7XkntTQOU7VYNhydhLuJobFRicPa4F6o1CfzaZiaPvJwt31OPwwiaJM9fBKe69ULPP0Ceb0XuxoryKJIT95Tkg9Dw/0?wx_fmt=png&from=appmsg');
INSERT INTO `banners` (`id`, `media_id`, `name`, `url`) VALUES (7, 'xiWEbz3LGTAp4Uf9H93Aygti2up-VIMN1gzab2j1yYSeR0Is16yaNfV0BJAX-K9i', '周一', 'https://mmbiz.qpic.cn/mmbiz_png/7XkntTQOU7VYNhydhLuJobFRicPa4F6o1CbMOmzSFa7YyTRb4FjpTJSCX7o4FSXaKrEcgfumyXTQLjSicphRv64Q/0?wx_fmt=png&from=appmsg');
COMMIT;

-- ----------------------------
-- Table structure for drafts
-- ----------------------------
DROP TABLE IF EXISTS `drafts`;
CREATE TABLE `drafts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `media_id` varchar(255) NOT NULL DEFAULT '',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COMMENT='公众号草稿';

-- ----------------------------
-- Records of drafts
-- ----------------------------
BEGIN;
INSERT INTO `drafts` (`id`, `title`, `media_id`, `created_at`, `updated_at`) VALUES (19, '济南大集，周日提醒！', 'xiWEbz3LGTAp4Uf9H93AyrajIzLmbPnOnXgqQptjdI5YBwcnRFILeMA8F22lFsan', '2025-02-08 17:25:46', '2025-02-08 17:25:46');
INSERT INTO `drafts` (`id`, `title`, `media_id`, `created_at`, `updated_at`) VALUES (20, '济南大集，周一提醒！', 'xiWEbz3LGTAp4Uf9H93AyjIF7jR1CdQG2thyWKb_XWzhIthCBR6fUOUPsUGLeagw', NULL, NULL);
INSERT INTO `drafts` (`id`, `title`, `media_id`, `created_at`, `updated_at`) VALUES (21, '济南大集，周五提醒！', 'xiWEbz3LGTAp4Uf9H93AyjZFx916Y7XIosMaxrgah5A3ODhOFQXmKoMPdqegQuxP', NULL, NULL);
INSERT INTO `drafts` (`id`, `title`, `media_id`, `created_at`, `updated_at`) VALUES (22, '济南大集，周一提醒！', 'xiWEbz3LGTAp4Uf9H93Aymhg6iRjd5i2jjsZaajLB1XjWaHlIaB6aNXNvQsUO6i4', NULL, NULL);
INSERT INTO `drafts` (`id`, `title`, `media_id`, `created_at`, `updated_at`) VALUES (23, '济南大集，周四提醒！', 'xiWEbz3LGTAp4Uf9H93Aykv0HImeNL2xn-DrP4GpJlbfOiBPwx7XPBd4PKBYQBn7', NULL, NULL);
INSERT INTO `drafts` (`id`, `title`, `media_id`, `created_at`, `updated_at`) VALUES (24, '济南大集，周五提醒！', 'xiWEbz3LGTAp4Uf9H93AyrQmRQ3n36D1YPY2XlZhguv6LPjUftX73Byp5FH91f-V', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for markets
-- ----------------------------
DROP TABLE IF EXISTS `markets`;
CREATE TABLE `markets` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '唯一标识符ID',
  `name` varchar(255) NOT NULL COMMENT '大集名称，不能为空',
  `area_id` int(11) NOT NULL,
  `region` varchar(255) NOT NULL COMMENT '大集所在的区域',
  `dates` varchar(255) NOT NULL COMMENT '大集开放的日期',
  `address` varchar(255) NOT NULL COMMENT '大集地址',
  `bus_routes` json NOT NULL COMMENT '公交路线',
  `location` json NOT NULL COMMENT '大集的地理位置（包含经纬度）',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8 COMMENT='大集表，存储各个大集的信息';

-- ----------------------------
-- Records of markets
-- ----------------------------
BEGIN;
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (1, '亿来森大集', 1, '历下区', '\"一\", \"四\", \"六\", \"九\"', '花园东路4号院内', '[\"乘坐K106路、K138路、K163路、K168路、308路到十里河东站下车\", \"乘坐K11路到十里河站下车\"]', '{\"lat\": 36.69167, \"lng\": 117.100032}', '2024-12-31 08:04:53', '2024-12-31 08:04:53');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (2, '盛福庄大集', 1, '历下区', '\"三\", \"五\", \"八\", \"十\"', '花园东路与轻风路交叉口', '[\"乘坐K37路、K168路到花园东路崇华路站下车\"]', '{\"lat\": 36.695257, \"lng\": 117.118175}', '2024-12-31 08:04:53', '2024-12-31 08:04:53');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (3, '丁奥大集', 1, '历下区', '\"二\", \"七\"', '从八涧堡路口向北到乐园内（导航到历下区明湖花园或明德中学）', '[]', '{\"lat\": 36.681025, \"lng\": 117.018601}', '2024-12-31 08:04:53', '2024-12-31 08:04:53');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (4, '姚家大集', 1, '历下区', '\"二\", \"四\", \"七\", \"九\"', '华洋名苑或省博物馆站', '[]', '{\"lat\": 36.657211, \"lng\": 117.09224}', '2024-12-31 08:04:53', '2024-12-31 08:04:53');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (5, '八涧堡大集', 1, '历下区', '\"三\", \"五\", \"八\", \"十\"', '乘坐B237路、K279路到盛福花园南门站下车', '[]', '{\"lat\": 36.703549, \"lng\": 117.119127}', '2024-12-31 08:04:53', '2024-12-31 08:04:53');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (6, '蓝翔大集(东宇大集)', 2, '天桥区', '\"每周六、日\"', '东宇大街，蓝翔大集', '[\"乘坐K12路、K26路、K140路，到粟山路黄岗路站下车\", \"乘坐K72路、575路，到东宇大街粟山路站下车\"]', '{\"lat\": 36.701098, \"lng\": 116.948635}', '2024-12-31 08:07:22', '2024-12-31 08:07:22');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (7, '泺口民俗大集', 2, '天桥区', '\"四\", \"九\"', '济泺路与二环北路交叉口,黄河公园', '[\"K4路、K92路、K114路，到黄河公园站下车\"]', '{\"lat\": 36.729045, \"lng\": 116.994116}', '2024-12-31 08:07:22', '2024-12-31 08:07:22');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (8, '鹊山大集', 2, '天桥区', '\"二\", \"七\"', '黄河北鹊山北居委会，鹊山社区', '[\"乘坐K260路，在济冻路隧道北站下车走2公里\"]', '{\"lat\": 36.734217, \"lng\": 116.995812}', '2024-12-31 08:07:22', '2024-12-31 08:07:22');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (9, '桑梓店大集', 2, '天桥区', '\"一\", \"六\"', '黄河北桑梓店桑梓大街', '[\"乘坐K143路、K260路，到桑梓店街道办事处西站下车\"]', '{\"lat\": 36.781263, \"lng\": 116.920171}', '2024-12-31 08:07:22', '2024-12-31 08:07:22');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (10, '黄屯大集', 2, '天桥区', '\"一\", \"三\", \"六\", \"八\"', '十一中站', '[\"到十一中站下车\"]', '{\"lat\": 36.783683, \"lng\": 116.958637}', '2024-12-31 08:07:22', '2024-12-31 08:07:22');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (11, '七贤大集', 3, '市中区', '\"一\", \"六\"', '齐鲁七贤文化广场', '[\"乘坐K21路、K22路、K29路、K86路、K153路、K302路，到七贤庄东站下车\"]', '{\"lat\": 36.606827, \"lng\": 116.957607}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (12, '白马山大集(井家沟大集)', 3, '市中区', '\"四\", \"九\"', '白马山南路井家沟村', '[\"乘坐K124路到白马山铁路新村下车\", \"乘坐K13路、K125路、533路在白马山公交车场下车\"]', '{\"lat\": 36.619343, \"lng\": 116.942488}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (13, '党家庄大集', 3, '市中区', '\"三\", \"八\"', '党家庄', '[\"乘坐K21路、K22路、K86路到党家庄下车\"]', '{\"lat\": 36.58084, \"lng\": 116.913707}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (14, '陡沟大集', 3, '市中区', '\"五\", \"十\"', '陡沟站', '[\"可乘坐23路、K61路，到陡沟站下车\"]', '{\"lat\": 36.601133, \"lng\": 116.896251}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (15, '兴隆大集', 3, '市中区', '\"一\", \"三\", \"六\", \"八\"', '济南市二环南路兴隆山庄', '[\"乘坐BRT9路到山大兴隆山校区下车\", \"乘坐K48路、B52路、561路到兴隆山庄站下车\"]', '{\"lat\": 36.599241, \"lng\": 117.044944}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (16, '大涧沟大集', 3, '市中区', '\"四\", \"九\"', '济南市大涧沟西村', '[\"乘坐K17路到大涧沟东市场下车\", \"乘坐65路、67路、K88路、K142路到大涧沟站下车\"]', '{\"lat\": 36.557896, \"lng\": 116.995099}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (17, '九曲庄大集', 3, '市中区', '\"二\", \"七\"', '九曲庄路泉海小学附近', '[\"乘坐K41路、K94路、B120路、509路，到中海国际社区站下车\"]', '{\"lat\": 36.608319, \"lng\": 116.977868}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (18, '杜家庙大集', 3, '市中区', '\"二\", \"七\"', '济南市市中区杜家庙村', '[\"建议自驾\"]', '{\"lat\": 36.613052, \"lng\": 116.8344}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (19, '郑庄大集', 3, '市中区', '\"三\", \"八\"', '济南市市中区郑庄村', '[\"建议自驾\"]', '{\"lat\": 36.614708, \"lng\": 116.86992}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (20, '山水大集', 3, '市中区', '\"三\", \"五\", \"八\", \"十\"', '二七南路山水大润发广场', '[\"公交K41、K55、K94、K228，在二七南路西口站下车\"]', '{\"lat\": 36.628005, \"lng\": 116.991819}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (21, '吴家大集', 3, '市中区', '\"二\", \"七\"', '十六里河街道吴家庄村', '[\"K142路公交车吴家北站下车\"]', '{\"lat\": 36.550637, \"lng\": 116.971896}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (22, '涝坡大集', 3, '市中区', '\"五\", \"十\"', '济南市市中区涝坡村', '[\"公交K121涝坡市场站下车\"]', '{\"lat\": 36.562828, \"lng\": 117.107668}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (23, '十六里河大集', 3, '市中区', '\"五\", \"十\"', '南苑小区北门站', '[\"乘坐B164路、K155路，到南苑小区北门站下车\"]', '{\"lat\": 36.59036, \"lng\": 116.994727}', '2024-12-31 08:10:34', '2024-12-31 08:10:34');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (24, '唐王大集', 9, '历城区', '\"五\", \"十\"', '龙泉大街中段，唐王街道办事处', '[\"B307在唐王街道办事处站下车\"]', '{\"lat\": 36.796268, \"lng\": 117.295482}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (25, '王舍人大集', 9, '历城区', '\"二\", \"七\"', '工业北路北，百彩路和开源路交叉口', '[\"B71、B97、K189、BRT11、BRT12路在凤凰北路望华北街站下车\"]', '{\"lat\": 36.726573, \"lng\": 117.154442}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (26, '潘庄大集', 9, '历城区', '\"四\", \"九\"', '融创茂体育馆', '[]', '{\"lat\": 36.670509, \"lng\": 117.196263}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (27, '神武大集', 9, '历城区', '\"四\", \"九\"', '港西路神武新村', '[\"乘坐K158路、K265路到章锦综合保税区站下车\", \"乘坐580路到神武新村站下车\"]', '{\"lat\": 36.655482, \"lng\": 117.229176}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (28, '港沟大集', 9, '历城区', '\"五\", \"十\"', '港沟新居三区', '[\"乘坐B235路，到港沟新居三区站下车\"]', '{\"lat\": 36.639414, \"lng\": 117.183634}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (29, '郭店大集', 9, '历城区', '\"一\", \"六\"', '工业北路郭店商业街，郭西小区附近', '[\"乘坐K10路、K10支、K226路到郭店站下车\"]', '{\"lat\": 36.723379, \"lng\": 117.229405}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (30, '孙村大集', 9, '历城区', '\"三\", \"五\", \"八\", \"十\"', '孙村镇集贸市场', '[\"321、K224、K176在孙村南路下车\"]', '{\"lat\": 36.688768, \"lng\": 117.30373}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (31, '大辛庄大集', 9, '历城区', '\"四\", \"九\"', '工业北路与幸福柳路交叉口，幸福柳广场', '[\"乘坐K46路、B57路、BRT6路、BRT8路、BRT11路、313路、315路到幸福柳广场站下车\"]', '{\"lat\": 36.718817, \"lng\": 117.106852}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (32, '韩仓大集', 9, '历城区', '\"五\", \"十\"', '飞跃大道钢城新苑南面', '[\"K10、K47、K99、K122、B236路在飞跃大道新村中路站下车\"]', '{\"lat\": 36.711943, \"lng\": 117.184695}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (33, '祝甸大集', 9, '历城区', '\"三\", \"五\", \"八\", \"十\"', '祝甸路站', '[\"乘坐K30路、K80路、K118路到祝甸站下车\"]', '{\"lat\": 36.695186, \"lng\": 117.091077}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (34, '滩头大集', 9, '历城区', '\"三\", \"八\"', '鲍山街道南滩头村', '[\"地铁3号线滩头站下车\"]', '{\"lat\": 36.769777, \"lng\": 117.158866}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (35, '遥墙大集', 9, '历城区', '\"五\", \"十\"', '遥墙街道办事处', '[\"乘坐B97路，到遥墙街道办事处站下车\"]', '{\"lat\": 36.819115, \"lng\": 117.192529}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (36, '董家大集', 9, '历城区', '\"三\", \"八\"', '董家村稼轩路与温梁路交叉口', '[\"乘坐K10路，在董家村南站下车\"]', '{\"lat\": 36.757434, \"lng\": 117.240126}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (37, '堰头大集', 9, '历城区', '\"三\", \"八\"', '华山片区堰头村', '[\"乘坐B218路，到光华大道卧中路站下车\"]', '{\"lat\": 36.756301, \"lng\": 117.086846}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (38, '狮子张大集', 9, '历城区', '\"二\", \"四\", \"七\", \"九\"', '西杨庄站', '[\"乘坐B79路、B84路，到西杨庄站下车\"]', '{\"lat\": 36.713098, \"lng\": 117.038723}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (39, '鸡山村大集', 9, '历城区', '\"四\", \"九\"', '鸡山村', '[\"乘坐300路、311路、K301，到鸡山村站下车\"]', '{\"lat\": 36.675003, \"lng\": 117.364678}', '2024-12-31 08:11:14', '2024-12-31 08:11:14');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (40, '仲宫大集', 10, '南部山区', '\"一\", \"三\", \"六\", \"八\"', '327省道西150米，仲宫大集', '[\"乘坐K88路在仲宫站下车\", \"65路在东郭而庄西站下车\"]', '{\"lat\": 36.494531, \"lng\": 117.031257}', '2024-12-31 08:12:15', '2024-12-31 08:12:15');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (41, '西营大集', 10, '南部山区', '\"四\", \"九\"', '云梯山路与建新路交叉口，西营集', '[\"可从英雄山路西八公交车场站点乘坐65路到西营站下车\", \"在燕山立交桥北、燕山立交桥东乘坐312路、325路、326路到西营站下车\"]', '{\"lat\": 36.499317, \"lng\": 117.229836}', '2024-12-31 08:12:15', '2024-12-31 08:12:15');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (42, '李家塘大集', 10, '南部山区', '\"五\", \"十\"', '李家塘集贸市场', '[\"从市区乘67路\", \"从仲宫乘812路、815路在李家塘站下车\"]', '{\"lat\": 36.453473, \"lng\": 117.159339}', '2024-12-31 08:12:15', '2024-12-31 08:12:15');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (43, '高而大集', 10, '南部山区', '\"四\", \"九\"', '055县道并药路，南高而村', '[\"从仲宫乘887路、888路在高而站下车\", \"从英雄山立交桥南乘坐882路到高而站下车\"]', '{\"lat\": 36.402326, \"lng\": 117.0396}', '2024-12-31 08:12:15', '2024-12-31 08:12:15');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (44, '黄巢大集', 10, '南部山区', '\"五\", \"十\"', '103省道窝黄路黄巢', '[\"从青年桥乘883路在黄巢站下车\"]', '{\"lat\": 36.357252, \"lng\": 117.141688}', '2024-12-31 08:12:15', '2024-12-31 08:12:15');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (45, '柳埠大集', 10, '南部山区', '\"二\", \"七\"', '府前街，柳埠大集', '[\"市区乘坐67路、883路、885路，到柳埠大桥站下车\"]', '{\"lat\": 36.439499, \"lng\": 117.113541}', '2024-12-31 08:12:15', '2024-12-31 08:12:15');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (46, '窝铺大集', 10, '南部山区', '\"一\", \"六\"', '103省道窝铺', '[\"从青年桥乘883路到窝铺站下车\"]', '{\"lat\": 36.385958, \"lng\": 117.183163}', '2024-12-31 08:12:15', '2024-12-31 08:12:15');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (47, '锦绣川商家大集', 10, '南部山区', '\"五\", \"十\"', '317省道锦绣川办事处西商村', '[\"可乘坐65路公交车，在商家站下车\"]', '{\"lat\": 36.504817, \"lng\": 117.148353}', '2024-12-31 08:12:15', '2024-12-31 08:12:15');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (48, '吴家堡大集', 11, '槐荫区', '\"二\", \"七\"', '吴家堡中心幼儿园附近', '[\"可乘坐K26路、K77路、K192路，到吴家堡街道办事处站下车\"]', '{\"lat\": 36.696034, \"lng\": 116.910251}', '2024-12-31 08:12:43', '2024-12-31 08:12:43');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (49, '王府庄大集', 11, '槐荫区', '\"一\", \"二\", \"四\", \"六\", \"七\"', '党家路王府庄', '[\"可乘坐K61路、K228路，到张家庄小区站下车\"]', '{\"lat\": 36.698129, \"lng\": 116.98796}', '2024-12-31 08:12:43', '2024-12-31 08:12:43');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (50, '朱庄大集', 11, '槐荫区', '\"三\", \"五\", \"八\", \"十\"', '经十西路朱庄集贸市场', '[\"可乘坐K20路、K78路、K141路，到朱庄站下车\"]', '{\"lat\": 36.632776, \"lng\": 116.83181}', '2024-12-31 08:12:43', '2024-12-31 08:12:43');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (51, '大金庄大集', 11, '槐荫区', '\"一\", \"四\", \"六\", \"九\"', '济南市槐荫区齐鲁大道与枣庄路交叉口西侧“大金庄大集”', '[]', '{\"lat\": 36.65565, \"lng\": 116.894956}', '2024-12-31 08:12:43', '2024-12-31 08:12:43');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (52, '绣惠东关大集', 12, '章丘区', '\"一\", \"六\"', '章丘区绣惠供电所', '[\"章丘1路、102路、108路、110路，在绣惠供电所站下车\"]', '{\"lat\": 36.681258, \"lng\": 117.526228}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (53, '刁镇大集', 12, '章丘区', '\"四\", \"九\"', '章丘区兴隆街刁镇市场', '[\"章丘110路在刁镇派出所站下车\"]', '{\"lat\": 36.88666, \"lng\": 117.507671}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (54, '相公大集', 12, '章丘区', '\"五\", \"十\"', '章丘区相公庄镇相五村', '[\"章丘13路在相公庄街道站下车\"]', '{\"lat\": 36.76167, \"lng\": 117.557761}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (55, '乐天大集', 13, '长清区', '\"一\", \"三\", \"六\", \"八\"', '长清区大学路乐天小区', '[\"可乘坐K20路、K141路到乐天小区站下车\"]', '{\"lat\": 36.553034, \"lng\": 116.779003}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (56, '长清大集', 13, '长清区', '\"五\", \"十\"', '长清区黄河南路商场北门、东北关馨苑小区', '[\"可乘坐271路，在文津苑小区站下车\"]', '{\"lat\": 36.563653, \"lng\": 116.742236}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (57, '丹凤大集', 13, '长清区', '\"二\", \"七\"', '长清区丁香路丹凤小区', '[\"可乘坐K24路，到丹凤小区站下车\"]', '{\"lat\": 36.533868, \"lng\": 116.779746}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (58, '鲁西大集', 14, '莱芜区', '\"四\", \"九\"', '莱芜区方下街道鲁西村', '[\"莱芜K207路在亓毛埠村北站下车\", \"K225在鲁西村下车\"]', '{\"lat\": 36.204669, \"lng\": 117.51489}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (59, '寨里大集', 14, '莱芜区', '\"三\", \"八\"', '莱芜区寨里镇政府驻地', '[\"莱芜K206、K208在寨里车站下车\"]', '{\"lat\": 36.303571, \"lng\": 117.490218}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (60, '苗山大集', 14, '莱芜区', '\"四\", \"九\"', '莱芜区苗山镇政府附近', '[\"莱芜K202、K210、K212在苗山卫生院站下车\"]', '{\"lat\": 36.315969, \"lng\": 117.795602}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (61, '口镇大集', 14, '莱芜区', '\"二\", \"七\"', '莱芜区口镇街道集农贸市场', '[\"莱芜K17、K18在口镇二中路口下车\", \"K204、K214、K26在莱明路正顺路口下车\"]', '{\"lat\": 36.316797, \"lng\": 117.621353}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (62, '牛泉大集', 14, '莱芜区', '\"二\", \"七\"', '莱芜区牛泉镇政府附近', '[\"莱芜K207路在牛泉加油站下车\"]', '{\"lat\": 36.193055, \"lng\": 117.54467}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (63, '茶业口大集', 14, '莱芜区', '\"一\", \"六\"', '莱芜区茶业口镇政府附近', '[\"莱芜K203路在镇政府站下车\"]', '{\"lat\": 36.490554, \"lng\": 117.692443}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (64, '颜庄大集', 15, '钢城区', '\"五\", \"十\"', '钢城区颜庄街道', '[\"莱芜K201路在颜庄镇政府站下车\"]', '{\"lat\": 36.120854, \"lng\": 117.773931}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (65, '辛庄大集', 15, '钢城区', '\"四\", \"九\"', '钢城区辛庄街道', '[\"莱芜K209路在辛庄站下车\"]', '{\"lat\": 36.195838, \"lng\": 117.795893}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (66, '平阴大集', 16, '平阴县', '\"二\", \"七\"', '平阴县府前街与青龙路交叉口附近', '[\"平阴4路在会仙山站下\"]', '{\"lat\": 36.2903, \"lng\": 116.445864}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (67, '孔村大集', 16, '平阴县', '\"五\", \"十\"', '平阴县孔村镇政府附近', '[]', '{\"lat\": 36.176966, \"lng\": 116.470267}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (68, '孝直大集', 16, '平阴县', '\"二\", \"七\"', '平阴县孝直镇文化中心附近', '[]', '{\"lat\": 36.11274, \"lng\": 116.455255}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
INSERT INTO `markets` (`id`, `name`, `area_id`, `region`, `dates`, `address`, `bus_routes`, `location`, `created_at`, `updated_at`) VALUES (69, '东阿镇大集', 16, '平阴县', '\"一\", \"六\"', '平阴县东阿镇', '[]', '{\"lat\": 36.172841, \"lng\": 116.28538}', '2024-12-31 08:13:58', '2024-12-31 08:13:58');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `permission`, `username`, `password`, `created_at`, `updated_at`) VALUES (8, 10, 'admin', '$2b$10$a6fUiLnTTFUz9NxMaJzsy.Ap8QwcjkpFuFAhy/yNjS85HaeHQL.h2', '2025-02-15 09:16:58', '2025-02-15 09:16:58');
INSERT INTO `users` (`id`, `permission`, `username`, `password`, `created_at`, `updated_at`) VALUES (9, 1, 'test', '$2b$10$MngkLJdcB7bneIvoJFnVC.xD79j5SkHjzkWobgOItr5k7ktPbAKIu', '2025-02-25 07:48:21', '2025-02-25 07:48:21');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
