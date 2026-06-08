// ========== 酒店预订系统 - 数据层 ==========

// 酒店数据（含 Unsplash 真实图片）
const hotelsData = [
    {
        id: 1,
        name: "云端天际酒店",
        city: "上海",
        district: "浦东新区",
        address: "陆家嘴金融贸易区世纪大道100号",
        stars: 5,
        rating: 4.8,
        description: "坐落于上海陆家嘴核心地带，坐拥黄浦江壮丽天际线。酒店拥有300间豪华客房，配备全景落地窗，让您尽享魔都璀璨夜景。米其林星级餐厅、无边际泳池、奢华水疗中心一应俱全。",
        amenities: ["免费WiFi", "游泳池", "健身房", "SPA", "餐厅", "停车场", "商务中心", "行政酒廊"],
        images: [
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800",
            "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800",
            "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800",
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
        ],
        rooms: [
            { type: "豪华大床房", price: 1288, desc: "45㎡，城市景观，含早餐" },
            { type: "行政套房", price: 2288, desc: "75㎡，黄浦江景，行政礼遇" },
            { type: "总统套房", price: 8888, desc: "180㎡，全景露台，私人管家" }
        ]
    },
    {
        id: 2,
        name: "西湖隐庐度假酒店",
        city: "杭州",
        district: "西湖区",
        address: "西湖风景名胜区龙井路18号",
        stars: 5,
        rating: 4.9,
        description: "隐匿于西湖龙井茶山之间，白墙黛瓦，江南园林设计。仅设48间禅意客房，每间均可远眺西湖或茶园。私享茶室、竹林瑜伽、湖畔下午茶——在这里，时间是慢的。",
        amenities: ["免费WiFi", "茶室", "瑜伽室", "花园", "餐厅", "停车场", "自行车租赁", "管家服务"],
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
            "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
        ],
        rooms: [
            { type: "禅意大床房", price: 1688, desc: "40㎡，茶园景观，含双早" },
            { type: "湖景套房", price: 2688, desc: "65㎡，西湖全景，私享露台" },
            { type: "独栋别墅", price: 5888, desc: "120㎡，独立庭院，温泉泡池" }
        ]
    },
    {
        id: 3,
        name: "三亚珊瑚湾度假酒店",
        city: "三亚",
        district: "海棠区",
        address: "海棠湾海岸大道88号",
        stars: 5,
        rating: 4.7,
        description: "面朝碧蓝南海，坐拥300米私属白沙滩。酒店以海洋元素为设计灵感，热带园林环绕，每间客房皆享海景阳台。潜水中心、海上运动俱乐部、海鲜餐厅，让您的海岛假期精彩纷呈。",
        amenities: ["免费WiFi", "私人海滩", "游泳池", "潜水中心", "儿童乐园", "餐厅", "停车场", "水上运动"],
        images: [
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
            "https://images.unsplash.com/photo-1585544314038-a0d012e2418f?w=800",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        ],
        rooms: [
            { type: "海景大床房", price: 988, desc: "38㎡，海景阳台，含早餐" },
            { type: "豪华海景套房", price: 1988, desc: "68㎡，180°海景，行政礼遇" },
            { type: "沙滩泳池别墅", price: 4888, desc: "150㎡，私人泳池，管家服务" }
        ]
    },
    {
        id: 4,
        name: "北京胡同四合院酒店",
        city: "北京",
        district: "东城区",
        address: "南锣鼓巷板厂胡同21号",
        stars: 4,
        rating: 4.6,
        description: "由百年四合院精心改造而成的精品酒店，保留了老北京建筑的精髓——灰砖、红门、庭院、石榴树。仅15间客房，每间都融入了中国传统美学与现代舒适。步行可达故宫、后海。",
        amenities: ["免费WiFi", "庭院", "茶室", "餐厅", "图书室", "自行车租赁"],
        images: [
            "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
        ],
        rooms: [
            { type: "标准庭院房", price: 688, desc: "25㎡，庭院景观，含早餐" },
            { type: "豪华厢房", price: 988, desc: "38㎡，独立小院，含下午茶" },
            { type: "正房套房", price: 1688, desc: "55㎡，正房位置，老北京体验" }
        ]
    },
    {
        id: 5,
        name: "成都太古里博舍酒店",
        city: "成都",
        district: "锦江区",
        address: "太古里商业区笔帖式街81号",
        stars: 5,
        rating: 4.8,
        description: "位于成都时尚地标太古里核心，融合传统川西建筑与现代设计。酒店由英国著名建筑师设计，竹影婆娑，庭院深深。屋顶酒吧可俯瞰太古里全景，SPA采用蜀地天然草药。",
        amenities: ["免费WiFi", "游泳池", "健身房", "SPA", "屋顶酒吧", "餐厅", "停车场", "宠物友好"],
        images: [
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
            "https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=800",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
            "https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=800",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
        ],
        rooms: [
            { type: "精选大床房", price: 1088, desc: "40㎡，城市景观，含早餐" },
            { type: "博舍套房", price: 2088, desc: "70㎡，独立客厅，迷你吧" },
            { type: "顶层套房", price: 5988, desc: "160㎡，全景露台，私人厨师" }
        ]
    },
    {
        id: 6,
        name: "丽江古城花间堂",
        city: "丽江",
        district: "古城区",
        address: "大研古城五一街文治巷45号",
        stars: 4,
        rating: 4.7,
        description: "藏身于丽江古城深处的纳西庭院民宿，潺潺流水穿院而过，四季鲜花盛开。18间客房均由老宅改建，保留了纳西族传统木结构建筑风格。清晨在玉龙雪山背景下享用纳西早餐。",
        amenities: ["免费WiFi", "花园", "茶室", "早餐", "接机服务", "旅游咨询"],
        images: [
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800",
        ],
        rooms: [
            { type: "纳西庭院房", price: 488, desc: "22㎡，庭院景观，含早餐" },
            { type: "雪山观景房", price: 788, desc: "30㎡，玉龙雪山景，含下午茶" },
            { type: "独栋花房", price: 1288, desc: "50㎡，独立花园，纳西火塘" }
        ]
    },
    {
        id: 7,
        name: "广州珠江新城W酒店",
        city: "广州",
        district: "天河区",
        address: "珠江新城兴民路222号",
        stars: 5,
        rating: 4.5,
        description: "矗立于广州CBD核心，时尚潮流的奢华酒店。炫酷的灯光设计、前卫的艺术装置、高空泳池派对——这里是城市精英的聚集地。步行可达广州塔、花城广场。",
        amenities: ["免费WiFi", "游泳池", "健身房", "SPA", "酒吧", "餐厅", "停车场", "会议室"],
        images: [
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
            "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800",
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
        ],
        rooms: [
            { type: "奇妙客房", price: 888, desc: "35㎡，城市景观，含早餐" },
            { type: "壮美客房", price: 1388, desc: "50㎡，珠江景，行政酒廊" },
            { type: "WOW套房", price: 3888, desc: "100㎡，全景落地窗，DJ台" }
        ]
    },
    {
        id: 8,
        name: "大理洱海湖畔民宿",
        city: "大理",
        district: "大理市",
        address: "洱海东岸环海东路66号",
        stars: 3,
        rating: 4.6,
        description: "直面洱海的白族风格民宿，日出日落尽收眼底。简约而不简单的设计，每间客房都有超大海景窗。老板是一位摄影师，店内随处可见他的大理风光作品。租一辆自行车环洱海吧。",
        amenities: ["免费WiFi", "海景露台", "早餐", "自行车租赁", "停车场", "摄影工作室"],
        images: [
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
            "https://images.unsplash.com/photo-1585544314038-a0d012e2418f?w=800",
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
        ],
        rooms: [
            { type: "海景大床房", price: 528, desc: "30㎡，180°海景，含双早" },
            { type: "海景标准间", price: 358, desc: "20㎡，洱海景观，含早餐" },
            { type: "星空阁楼", price: 788, desc: "40㎡，天窗观星，独立露台" }
        ]
    },
    {
        id: 9,
        name: "深圳湾鹏瑞莱佛士酒店",
        city: "深圳",
        district: "南山区",
        address: "深圳湾科技生态园中心路3008号",
        stars: 5,
        rating: 4.8,
        description: "坐落于深圳湾超级总部基地，360°无遮挡海景。由新加坡莱佛士品牌管理，融合岭南文化与国际奢华。168间客房均配备智能家居系统，云端无边际泳池可俯瞰深圳湾大桥。",
        amenities: ["免费WiFi", "游泳池", "健身房", "SPA", "餐厅", "停车场", "行政酒廊", "儿童俱乐部"],
        images: [
            "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
        ],
        rooms: [
            { type: "湾景大床房", price: 1588, desc: "48㎡，深圳湾海景，含双早" },
            { type: "行政海景套房", price: 2888, desc: "80㎡，270°观景，行政礼遇" },
            { type: "总统套房", price: 12888, desc: "220㎡，私人泳池，劳斯莱斯接送" }
        ]
    },
    {
        id: 10,
        name: "厦门鼓浪屿林氏府酒店",
        city: "厦门",
        district: "思明区",
        address: "鼓浪屿鹿礁路11-19号",
        stars: 4,
        rating: 4.7,
        description: "位于世界文化遗产鼓浪屿核心区，由百年林氏府邸修缮而成。红砖洋楼、欧式庭院、琴声袅袅。仅22间复古客房，每间都以一段鼓浪屿故事命名。步行可达菽庄花园、日光岩。",
        amenities: ["免费WiFi", "花园", "茶室", "早餐", "钢琴室", "图书馆", "接驳服务"],
        images: [
            "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800",
            "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800",
            "https://images.unsplash.com/photo-1585544314038-a0d012e2418f?w=800",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
        ],
        rooms: [
            { type: "花园大床房", price: 688, desc: "28㎡，庭院景观，含早餐" },
            { type: "海景套房", price: 1188, desc: "45㎡，鹭江海景，复古浴缸" },
            { type: "府邸套房", price: 1988, desc: "70㎡，独立书房，留声机音响" }
        ]
    },
    {
        id: 11,
        name: "重庆来福士洲际酒店",
        city: "重庆",
        district: "渝中区",
        address: "朝天门接圣街8号来福士广场",
        stars: 5,
        rating: 4.6,
        description: "矗立于长江与嘉陵江交汇处的「朝天扬帆」建筑群顶端。酒店悬于250米高空，水晶连廊横跨四栋塔楼，被誉为「重庆天空之眼」。380间客房尽览两江四岸立体夜景。",
        amenities: ["免费WiFi", "游泳池", "健身房", "SPA", "餐厅", "空中酒吧", "停车场", "会议室"],
        images: [
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
            "https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=800",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
            "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800",
        ],
        rooms: [
            { type: "江景大床房", price: 1088, desc: "42㎡，两江交汇景，含早餐" },
            { type: "至尊江景套房", price: 2188, desc: "75㎡，拐角落地窗，行政礼遇" },
            { type: "总统套房", price: 8888, desc: "200㎡，私人露台，管家服务" }
        ]
    },
    {
        id: 12,
        name: "苏州平江府书香世家酒店",
        city: "苏州",
        district: "姑苏区",
        address: "平江路白塔东路60号",
        stars: 4,
        rating: 4.8,
        description: "隐匿于苏州平江历史街区，由三进苏式园林院落改建。粉墙黛瓦、曲径通幽、太湖石与翠竹相映成趣。每间客房都是一幅《姑苏繁华图》，推开窗便是小桥流水。",
        amenities: ["免费WiFi", "园林", "茶室", "苏式早餐", "书吧", "汉服体验", "停车场"],
        images: [
            "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
        ],
        rooms: [
            { type: "园林景观房", price: 628, desc: "26㎡，庭院景观，含苏式早餐" },
            { type: "临河套房", price: 1088, desc: "42㎡，推窗见河，私享茶席" },
            { type: "独栋书院", price: 1888, desc: "65㎡，独立小楼，文房四宝" }
        ]
    },
    {
        id: 13,
        name: "青岛涵碧楼酒店",
        city: "青岛",
        district: "黄岛区",
        address: "九龙山路277号",
        stars: 5,
        rating: 4.5,
        description: "由建筑大师Kerry Hill设计的极简主义海滨酒店，以青岛「红瓦绿树、碧海蓝天」为灵感。铜网外立面随海风摇曳，无边泳池与黄海融为一体。私享一公里海岸线，日出时分享受胶州湾第一缕阳光。",
        amenities: ["免费WiFi", "私人海滩", "无边泳池", "SPA", "温泉", "餐厅", "停车场", "瑜伽"],
        images: [
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        ],
        rooms: [
            { type: "海景大床房", price: 1388, desc: "50㎡，全海景落地窗，含早餐" },
            { type: "豪华海景套房", price: 2588, desc: "90㎡，私享露台，温泉泡池" },
            { type: "沙滩别墅", price: 6888, desc: "200㎡，独立泳池，私人管家" }
        ]
    },
    {
        id: 14,
        name: "南京颐和公馆",
        city: "南京",
        district: "鼓楼区",
        address: "颐和路公馆区江苏路3号",
        stars: 5,
        rating: 4.9,
        description: "坐落于南京最美街道颐和路，由26栋民国时期公馆别墅组成。梧桐深深、青砖灰瓦，每一栋建筑都承载着一段民国往事。酒店内设民国主题博物馆，住客可参与旗袍换装体验。",
        amenities: ["免费WiFi", "花园", "博物馆", "餐厅", "下午茶", "图书馆", "停车场", "旗袍体验"],
        images: [
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
            "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800",
        ],
        rooms: [
            { type: "公馆大床房", price: 1288, desc: "35㎡，民国风情，含双早" },
            { type: "独栋公馆套房", price: 2588, desc: "70㎡，独立花园，管家服务" },
            { type: "主席套房", price: 5888, desc: "150㎡，私人庭院，防空洞参观" }
        ]
    },
    {
        id: 15,
        name: "哈尔滨马迭尔宾馆",
        city: "哈尔滨",
        district: "道里区",
        address: "中央大街89号",
        stars: 4,
        rating: 4.4,
        description: "百年历史的俄式新艺术运动风格建筑，中央大街上的活化石。始建于1906年，曾是远东最豪华的社交场所。冬季推窗即见冰雪大世界，步行可达圣索菲亚教堂。俄式餐厅传承百年风味。",
        amenities: ["免费WiFi", "俄式餐厅", "酒吧", "停车场", "冰雪旅游咨询", "暖气"],
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
            "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
        ],
        rooms: [
            { type: "经典标准间", price: 488, desc: "22㎡，百年建筑，含俄式早餐" },
            { type: "豪华套房", price: 888, desc: "40㎡，中央大街景，复古家具" },
            { type: "名人套房", price: 1688, desc: "60㎡，历史名人同款，独立客厅" }
        ]
    },
    {
        id: 16,
        name: "香格里拉松赞林卡酒店",
        city: "香格里拉",
        district: "建塘镇",
        address: "松赞林寺旁克纳村",
        stars: 5,
        rating: 4.9,
        description: "坐拥松赞林寺全景的藏式庄园酒店，海拔3300米。由24栋藏式碉房组成，每间客房均可远眺金色寺院屋顶与雪山。清晨在煨桑的柏香中醒来，夜晚围着火塘聆听藏族阿妈讲述格萨尔王传说。",
        amenities: ["免费WiFi", "藏式早餐", "火塘", "经堂", "牦牛绒制品", "停车场", "高原氧吧"],
        images: [
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
            "https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=800",
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        ],
        rooms: [
            { type: "藏式大床房", price: 1288, desc: "35㎡，松赞林寺景观，含藏式早餐" },
            { type: "雪山套房", price: 2288, desc: "60㎡，梅里雪山远景，独立经堂" },
            { type: "庄园别墅", price: 4888, desc: "120㎡，私人庭院，酥油茶体验" }
        ]
    }
];

// 默认图片（当图片加载失败时使用）
const defaultImage = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"250\" viewBox=\"0 0 400 250\"><rect fill=\"#f1f5f9\" width=\"400\" height=\"250\" rx=\"8\"/><text fill=\"#64748b\" font-family=\"system-ui\" font-size=\"48\" text-anchor=\"middle\" x=\"200\" y=\"115\">🏨</text><text fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"15\" text-anchor=\"middle\" x=\"200\" y=\"155\">暂无图片</text><text fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"12\" text-anchor=\"middle\" x=\"200\" y=\"180\">放入 images/ 文件夹即可显示</text></svg>");

// 从 localStorage 加载订单数据
function loadBookings() {
    try {
        const data = localStorage.getItem('hotel_bookings');
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

// 保存订单数据到 localStorage
function saveBookings(bookings) {
    localStorage.setItem('hotel_bookings', JSON.stringify(bookings));
}

// 加载酒店数据（支持管理端修改）
function loadHotels() {
    try {
        const data = localStorage.getItem('hotel_hotels');
        return data ? JSON.parse(data) : hotelsData;
    } catch (e) {
        return hotelsData;
    }
}

// 保存酒店数据
function saveHotels(hotels) {
    localStorage.setItem('hotel_hotels', JSON.stringify(hotels));
}

// 重置酒店数据
function resetHotels() {
    localStorage.removeItem('hotel_hotels');
}

// 生成订单ID
function generateBookingId() {
    return 'BK' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
}

// 城市列表
const cities = [...new Set(hotelsData.map(h => h.city))];

// 获取所有城市
function getCities() {
    return [...new Set(loadHotels().map(h => h.city))];
}

// 星级筛选
const starOptions = [
    { value: '', label: '全部星级' },
    { value: '5', label: '★★★★★' },
    { value: '4', label: '★★★★' },
    { value: '3', label: '★★★' }
];

// ========== 用户认证系统 ==========

// 预置管理员账号
const defaultUsers = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: '系统管理员', phone: '13800000000', createdAt: '2026-01-01' },
    { id: 2, username: 'user1', password: '123456', role: 'user', name: '张三', phone: '13900000001', createdAt: '2026-01-01' }
];

// 加载用户数据
function loadUsers() {
    try {
        const data = localStorage.getItem('hotel_users');
        return data ? JSON.parse(data) : defaultUsers;
    } catch (e) {
        return defaultUsers;
    }
}

// 保存用户数据
function saveUsers(users) {
    localStorage.setItem('hotel_users', JSON.stringify(users));
}

// 当前登录用户
function getCurrentUser() {
    try {
        const data = localStorage.getItem('hotel_current_user');
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}

// 设置当前登录用户
function setCurrentUser(user) {
    if (user) {
        localStorage.setItem('hotel_current_user', JSON.stringify(user));
    } else {
        localStorage.removeItem('hotel_current_user');
    }
}

// 注册新用户
function registerUser(username, password, name, phone) {
    const users = loadUsers();
    if (users.find(u => u.username === username)) {
        return { success: false, message: '用户名已存在' };
    }
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        username,
        password,
        role: 'user',
        name: name || username,
        phone: phone || '',
        createdAt: new Date().toISOString().split('T')[0]
    };
    users.push(newUser);
    saveUsers(users);
    return { success: true, user: newUser };
}

// 用户登录
function loginUser(username, password) {
    const users = loadUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return { success: false, message: '用户名或密码错误' };
    }
    // 不返回密码
    const { password: _, ...safeUser } = user;
    setCurrentUser(safeUser);
    return { success: true, user: safeUser };
}

// 退出登录
function logoutUser() {
    setCurrentUser(null);
}

// 检查是否已登录
function isLoggedIn() {
    return getCurrentUser() !== null;
}

// 检查是否为管理员
function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'admin';
}

// ========== 用户评价系统 ==========

// 预置示例评价
const defaultReviews = [
    {
        "id": 1,
        "hotelId": 14,
        "userId": 1,
        "username": "user1",
        "userName": "郑铭",
        "rating": 3,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-06-28"
    },
    {
        "id": 2,
        "hotelId": 6,
        "userId": 3,
        "username": "user3",
        "userName": "袁飞",
        "rating": 2,
        "comment": "预订的时候出了点小问题，酒店前台很耐心地帮我解决了，非常感谢。",
        "createdAt": "2026-06-28"
    },
    {
        "id": 3,
        "hotelId": 12,
        "userId": 3,
        "username": "user3",
        "userName": "陆明",
        "rating": 4,
        "comment": "住了三晚，每天房间都打扫得很干净。周边吃的也多，交通方便。",
        "createdAt": "2026-06-28"
    },
    {
        "id": 4,
        "hotelId": 1,
        "userId": 1,
        "username": "user1",
        "userName": "戴慧",
        "rating": 5,
        "comment": "酒店离地铁站很近，去各个景点都很方便。前台还可以帮忙叫车。",
        "createdAt": "2026-06-27"
    },
    {
        "id": 5,
        "hotelId": 11,
        "userId": 3,
        "username": "user3",
        "userName": "郭娜",
        "rating": 5,
        "comment": "浴室的洗护用品都是品牌货，味道很好闻。浴缸也够大可以泡澡。",
        "createdAt": "2026-06-27"
    },
    {
        "id": 6,
        "hotelId": 5,
        "userId": 10,
        "username": "traveler10",
        "userName": "尹静",
        "rating": 5,
        "comment": "住过很多酒店，这家的床品是最舒服的。被子轻盈柔软，枕头高度刚好。",
        "createdAt": "2026-06-26"
    },
    {
        "id": 7,
        "hotelId": 1,
        "userId": 11,
        "username": "traveler11",
        "userName": "金鑫",
        "rating": 2,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-06-25"
    },
    {
        "id": 8,
        "hotelId": 4,
        "userId": 8,
        "username": "traveler8",
        "userName": "吴军",
        "rating": 4,
        "comment": "酒店的SPA非常舒服，按摩师手法专业。游完泳再去做了个全身按摩。",
        "createdAt": "2026-06-24"
    },
    {
        "id": 9,
        "hotelId": 15,
        "userId": 5,
        "username": "traveler5",
        "userName": "夏哲",
        "rating": 2,
        "comment": "入住当天正好是我的生日，酒店还送了一个小蛋糕，很惊喜很感动。",
        "createdAt": "2026-06-23"
    },
    {
        "id": 10,
        "hotelId": 4,
        "userId": 10,
        "username": "traveler10",
        "userName": "龙军",
        "rating": 3,
        "comment": "酒店的泳池太出片了！无边际设计配上远处的景色，随便拍都是大片。",
        "createdAt": "2026-06-23"
    },
    {
        "id": 11,
        "hotelId": 2,
        "userId": 2,
        "username": "user2",
        "userName": "万萱",
        "rating": 5,
        "comment": "老建筑改造的酒店，保留了原有的历史韵味又加入了现代舒适设施。",
        "createdAt": "2026-06-22"
    },
    {
        "id": 12,
        "hotelId": 8,
        "userId": 9,
        "username": "traveler9",
        "userName": "林鑫",
        "rating": 5,
        "comment": "预订的时候出了点小问题，酒店前台很耐心地帮我解决了，非常感谢。",
        "createdAt": "2026-06-20"
    },
    {
        "id": 13,
        "hotelId": 12,
        "userId": 5,
        "username": "traveler5",
        "userName": "汪哲",
        "rating": 4,
        "comment": "酒店位置很好，出行方便。前台服务热情，办理入住很快。房间比想象中大。",
        "createdAt": "2026-06-20"
    },
    {
        "id": 14,
        "hotelId": 16,
        "userId": 2,
        "username": "user2",
        "userName": "任静",
        "rating": 4,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-06-20"
    },
    {
        "id": 15,
        "hotelId": 12,
        "userId": 10,
        "username": "traveler10",
        "userName": "康军",
        "rating": 5,
        "comment": "酒店的大堂很有气势，水晶吊灯加上大理石地面，气派又不会太浮夸。",
        "createdAt": "2026-06-20"
    },
    {
        "id": 16,
        "hotelId": 8,
        "userId": 10,
        "username": "traveler10",
        "userName": "邱娜",
        "rating": 4,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-06-19"
    },
    {
        "id": 17,
        "hotelId": 6,
        "userId": 12,
        "username": "traveler12",
        "userName": "任敏",
        "rating": 4,
        "comment": "酒店的设计融合了当地文化元素，很有特色。住在这里就像住进了景点。",
        "createdAt": "2026-06-19"
    },
    {
        "id": 18,
        "hotelId": 8,
        "userId": 3,
        "username": "user3",
        "userName": "姜鑫",
        "rating": 5,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-06-18"
    },
    {
        "id": 19,
        "hotelId": 6,
        "userId": 4,
        "username": "user4",
        "userName": "林然",
        "rating": 5,
        "comment": "住了三晚，每天房间都打扫得很干净。周边吃的也多，交通方便。",
        "createdAt": "2026-06-18"
    },
    {
        "id": 20,
        "hotelId": 14,
        "userId": 12,
        "username": "traveler12",
        "userName": "苏杰",
        "rating": 4,
        "comment": "酒店的餐厅很惊艳，晚餐点了当地特色菜，味道正宗价格也很合理。",
        "createdAt": "2026-06-15"
    },
    {
        "id": 21,
        "hotelId": 10,
        "userId": 6,
        "username": "traveler6",
        "userName": "夏铭",
        "rating": 4,
        "comment": "房间里的茶具很精致，配的茶叶也很好喝。下午在阳台上喝茶看书太享受。",
        "createdAt": "2026-06-15"
    },
    {
        "id": 22,
        "hotelId": 12,
        "userId": 3,
        "username": "user3",
        "userName": "钱帅",
        "rating": 3,
        "comment": "夜景无敌！从房间窗户看出去整个城市灯火辉煌，太震撼了。",
        "createdAt": "2026-06-15"
    },
    {
        "id": 23,
        "hotelId": 1,
        "userId": 6,
        "username": "traveler6",
        "userName": "阎宁",
        "rating": 5,
        "comment": "酒店整体很新，设施都是智能化的，用起来很方便。浴室也很大。",
        "createdAt": "2026-06-15"
    },
    {
        "id": 24,
        "hotelId": 4,
        "userId": 6,
        "username": "traveler6",
        "userName": "龙秀兰",
        "rating": 5,
        "comment": "健身房24小时开放，器材很全。即使出差也不耽误锻炼，赞一个。",
        "createdAt": "2026-06-14"
    },
    {
        "id": 25,
        "hotelId": 10,
        "userId": 2,
        "username": "user2",
        "userName": "康芳",
        "rating": 3,
        "comment": "来这个城市出差每次都住这家，已经成为习惯了。品质一直很稳定。",
        "createdAt": "2026-06-13"
    },
    {
        "id": 26,
        "hotelId": 9,
        "userId": 8,
        "username": "traveler8",
        "userName": "曹畅",
        "rating": 4,
        "comment": "酒店的大堂很有气势，水晶吊灯加上大理石地面，气派又不会太浮夸。",
        "createdAt": "2026-06-13"
    },
    {
        "id": 27,
        "hotelId": 1,
        "userId": 11,
        "username": "traveler11",
        "userName": "乔涵",
        "rating": 5,
        "comment": "住过很多酒店，这家的床品是最舒服的。被子轻盈柔软，枕头高度刚好。",
        "createdAt": "2026-06-12"
    },
    {
        "id": 28,
        "hotelId": 4,
        "userId": 4,
        "username": "user4",
        "userName": "叶宁",
        "rating": 5,
        "comment": "预订的时候出了点小问题，酒店前台很耐心地帮我解决了，非常感谢。",
        "createdAt": "2026-06-10"
    },
    {
        "id": 29,
        "hotelId": 4,
        "userId": 5,
        "username": "traveler5",
        "userName": "段涵",
        "rating": 4,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-06-10"
    },
    {
        "id": 30,
        "hotelId": 4,
        "userId": 5,
        "username": "traveler5",
        "userName": "钟洋",
        "rating": 4,
        "comment": "离机场很近，有免费的接送机服务。对于赶早班机的人来说太方便了。",
        "createdAt": "2026-06-09"
    },
    {
        "id": 31,
        "hotelId": 5,
        "userId": 4,
        "username": "user4",
        "userName": "戴瑶",
        "rating": 2,
        "comment": "酒店的图书馆太棒了，有各种书籍可以借阅。晚上在这里看书很安静。",
        "createdAt": "2026-06-06"
    },
    {
        "id": 32,
        "hotelId": 1,
        "userId": 9,
        "username": "traveler9",
        "userName": "徐磊",
        "rating": 5,
        "comment": "住过很多酒店，这家的床品是最舒服的。被子轻盈柔软，枕头高度刚好。",
        "createdAt": "2026-06-05"
    },
    {
        "id": 33,
        "hotelId": 10,
        "userId": 7,
        "username": "traveler7",
        "userName": "毛铭",
        "rating": 4,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-06-04"
    },
    {
        "id": 34,
        "hotelId": 3,
        "userId": 1,
        "username": "user1",
        "userName": "罗洋",
        "rating": 4,
        "comment": "环境优雅安静，床品舒适，一觉睡到天亮。酒店的设计很有格调。",
        "createdAt": "2026-06-03"
    },
    {
        "id": 35,
        "hotelId": 10,
        "userId": 4,
        "username": "user4",
        "userName": "毛娟",
        "rating": 5,
        "comment": "住在山里空气特别好，窗外就是层层叠叠的自然风光。远离城市喧嚣。",
        "createdAt": "2026-06-02"
    },
    {
        "id": 36,
        "hotelId": 5,
        "userId": 5,
        "username": "traveler5",
        "userName": "李宁",
        "rating": 3,
        "comment": "酒店的酒吧调酒师水平很高，特调鸡尾酒很好喝。晚上来一杯很放松。",
        "createdAt": "2026-06-02"
    },
    {
        "id": 37,
        "hotelId": 12,
        "userId": 10,
        "username": "traveler10",
        "userName": "龙宇",
        "rating": 5,
        "comment": "酒店有免费的洗衣服务，对于长途旅行的人来说这个细节太贴心了。",
        "createdAt": "2026-06-01"
    },
    {
        "id": 38,
        "hotelId": 5,
        "userId": 10,
        "username": "traveler10",
        "userName": "雷勇",
        "rating": 5,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-05-28"
    },
    {
        "id": 39,
        "hotelId": 10,
        "userId": 11,
        "username": "traveler11",
        "userName": "阎秀兰",
        "rating": 5,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-05-28"
    },
    {
        "id": 40,
        "hotelId": 6,
        "userId": 4,
        "username": "user4",
        "userName": "于铭",
        "rating": 4,
        "comment": "离机场很近，有免费的接送机服务。对于赶早班机的人来说太方便了。",
        "createdAt": "2026-05-25"
    },
    {
        "id": 41,
        "hotelId": 3,
        "userId": 3,
        "username": "user3",
        "userName": "龚萱",
        "rating": 4,
        "comment": "虽然是连锁酒店但完全不输五星级。卫生干净服务标准，性价比极高。",
        "createdAt": "2026-05-25"
    },
    {
        "id": 42,
        "hotelId": 16,
        "userId": 3,
        "username": "user3",
        "userName": "罗敏",
        "rating": 5,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-05-25"
    },
    {
        "id": 43,
        "hotelId": 1,
        "userId": 5,
        "username": "traveler5",
        "userName": "贺鑫",
        "rating": 3,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-05-24"
    },
    {
        "id": 44,
        "hotelId": 10,
        "userId": 10,
        "username": "traveler10",
        "userName": "夏霞",
        "rating": 4,
        "comment": "环境优雅安静，床品舒适，一觉睡到天亮。酒店的设计很有格调。",
        "createdAt": "2026-05-24"
    },
    {
        "id": 45,
        "hotelId": 4,
        "userId": 6,
        "username": "traveler6",
        "userName": "程然",
        "rating": 4,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-05-24"
    },
    {
        "id": 46,
        "hotelId": 7,
        "userId": 5,
        "username": "traveler5",
        "userName": "杨桐",
        "rating": 4,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-05-22"
    },
    {
        "id": 47,
        "hotelId": 8,
        "userId": 10,
        "username": "traveler10",
        "userName": "郝铭",
        "rating": 3,
        "comment": "节假日期间入住的，虽然人多但酒店秩序井然，没有拥挤的感觉。",
        "createdAt": "2026-05-21"
    },
    {
        "id": 48,
        "hotelId": 15,
        "userId": 8,
        "username": "traveler8",
        "userName": "雷婷",
        "rating": 5,
        "comment": "酒店的酒吧调酒师水平很高，特调鸡尾酒很好喝。晚上来一杯很放松。",
        "createdAt": "2026-05-21"
    },
    {
        "id": 49,
        "hotelId": 6,
        "userId": 9,
        "username": "traveler9",
        "userName": "朱萱",
        "rating": 5,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-05-20"
    },
    {
        "id": 50,
        "hotelId": 1,
        "userId": 5,
        "username": "traveler5",
        "userName": "吴怡",
        "rating": 3,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-05-20"
    },
    {
        "id": 51,
        "hotelId": 16,
        "userId": 2,
        "username": "user2",
        "userName": "任磊",
        "rating": 3,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-05-18"
    },
    {
        "id": 52,
        "hotelId": 14,
        "userId": 8,
        "username": "traveler8",
        "userName": "周强",
        "rating": 3,
        "comment": "这家酒店最大的亮点是景观。无论大堂还是房间都能看到绝美的风景。",
        "createdAt": "2026-05-18"
    },
    {
        "id": 53,
        "hotelId": 4,
        "userId": 11,
        "username": "traveler11",
        "userName": "苏瑶",
        "rating": 5,
        "comment": "朋友推荐的，果然没有失望。视野开阔，拍照超级好看。",
        "createdAt": "2026-05-18"
    },
    {
        "id": 54,
        "hotelId": 16,
        "userId": 11,
        "username": "traveler11",
        "userName": "郝超",
        "rating": 5,
        "comment": "酒店的泳池太出片了！无边际设计配上远处的景色，随便拍都是大片。",
        "createdAt": "2026-05-18"
    },
    {
        "id": 55,
        "hotelId": 11,
        "userId": 12,
        "username": "traveler12",
        "userName": "贾宇",
        "rating": 5,
        "comment": "酒店离地铁站很近，去各个景点都很方便。前台还可以帮忙叫车。",
        "createdAt": "2026-05-18"
    },
    {
        "id": 56,
        "hotelId": 12,
        "userId": 11,
        "username": "traveler11",
        "userName": "夏博",
        "rating": 5,
        "comment": "住过很多酒店，这家的床品是最舒服的。被子轻盈柔软，枕头高度刚好。",
        "createdAt": "2026-05-15"
    },
    {
        "id": 57,
        "hotelId": 4,
        "userId": 7,
        "username": "traveler7",
        "userName": "董勇",
        "rating": 3,
        "comment": "房间布置得很温馨，像回到了自己家一样。以后来这个城市就住这家了。",
        "createdAt": "2026-05-15"
    },
    {
        "id": 58,
        "hotelId": 12,
        "userId": 4,
        "username": "user4",
        "userName": "乔睿",
        "rating": 4,
        "comment": "酒店有免费的洗衣服务，对于长途旅行的人来说这个细节太贴心了。",
        "createdAt": "2026-05-14"
    },
    {
        "id": 59,
        "hotelId": 11,
        "userId": 7,
        "username": "traveler7",
        "userName": "邱婷",
        "rating": 5,
        "comment": "老建筑改造的酒店，保留了原有的历史韵味又加入了现代舒适设施。",
        "createdAt": "2026-05-14"
    },
    {
        "id": 60,
        "hotelId": 15,
        "userId": 8,
        "username": "traveler8",
        "userName": "龚秀兰",
        "rating": 4,
        "comment": "老建筑改造的酒店，保留了原有的历史韵味又加入了现代舒适设施。",
        "createdAt": "2026-05-14"
    },
    {
        "id": 61,
        "hotelId": 8,
        "userId": 6,
        "username": "traveler6",
        "userName": "田娜",
        "rating": 4,
        "comment": "房间里的茶具很精致，配的茶叶也很好喝。下午在阳台上喝茶看书太享受。",
        "createdAt": "2026-05-14"
    },
    {
        "id": 62,
        "hotelId": 13,
        "userId": 10,
        "username": "traveler10",
        "userName": "汤芳",
        "rating": 3,
        "comment": "虽然是连锁酒店但完全不输五星级。卫生干净服务标准，性价比极高。",
        "createdAt": "2026-05-13"
    },
    {
        "id": 63,
        "hotelId": 6,
        "userId": 4,
        "username": "user4",
        "userName": "高芳",
        "rating": 4,
        "comment": "这家酒店最大的亮点是景观。无论大堂还是房间都能看到绝美的风景。",
        "createdAt": "2026-05-13"
    },
    {
        "id": 64,
        "hotelId": 6,
        "userId": 4,
        "username": "user4",
        "userName": "潘哲",
        "rating": 5,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-05-12"
    },
    {
        "id": 65,
        "hotelId": 4,
        "userId": 5,
        "username": "traveler5",
        "userName": "贾怡",
        "rating": 4,
        "comment": "酒店的图书馆太棒了，有各种书籍可以借阅。晚上在这里看书很安静。",
        "createdAt": "2026-05-11"
    },
    {
        "id": 66,
        "hotelId": 7,
        "userId": 6,
        "username": "traveler6",
        "userName": "钟敏",
        "rating": 2,
        "comment": "整个酒店充满了艺术气息，走廊里挂着当地艺术家的作品，像住在画廊里。",
        "createdAt": "2026-05-11"
    },
    {
        "id": 67,
        "hotelId": 6,
        "userId": 11,
        "username": "traveler11",
        "userName": "徐秀兰",
        "rating": 4,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-05-11"
    },
    {
        "id": 68,
        "hotelId": 15,
        "userId": 9,
        "username": "traveler9",
        "userName": "董帅",
        "rating": 5,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-05-10"
    },
    {
        "id": 69,
        "hotelId": 14,
        "userId": 2,
        "username": "user2",
        "userName": "钟博",
        "rating": 1,
        "comment": "酒店管家的服务让我印象深刻，帮我订了餐厅还推荐了游玩路线。",
        "createdAt": "2026-05-10"
    },
    {
        "id": 70,
        "hotelId": 4,
        "userId": 5,
        "username": "traveler5",
        "userName": "文明",
        "rating": 4,
        "comment": "第一次来这个城市，酒店给了很多游玩建议。位置就在市中心很方便。",
        "createdAt": "2026-05-10"
    },
    {
        "id": 71,
        "hotelId": 14,
        "userId": 10,
        "username": "traveler10",
        "userName": "侯芳",
        "rating": 4,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-05-10"
    },
    {
        "id": 72,
        "hotelId": 13,
        "userId": 6,
        "username": "traveler6",
        "userName": "谢慧",
        "rating": 4,
        "comment": "酒店离地铁站很近，去各个景点都很方便。前台还可以帮忙叫车。",
        "createdAt": "2026-05-09"
    },
    {
        "id": 73,
        "hotelId": 14,
        "userId": 1,
        "username": "user1",
        "userName": "刘静",
        "rating": 5,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-05-09"
    },
    {
        "id": 74,
        "hotelId": 8,
        "userId": 10,
        "username": "traveler10",
        "userName": "龚敏",
        "rating": 4,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-05-07"
    },
    {
        "id": 75,
        "hotelId": 2,
        "userId": 5,
        "username": "traveler5",
        "userName": "邱霞",
        "rating": 5,
        "comment": "来这个城市出差每次都住这家，已经成为习惯了。品质一直很稳定。",
        "createdAt": "2026-05-07"
    },
    {
        "id": 76,
        "hotelId": 3,
        "userId": 9,
        "username": "traveler9",
        "userName": "龚磊",
        "rating": 5,
        "comment": "浴室的洗护用品都是品牌货，味道很好闻。浴缸也够大可以泡澡。",
        "createdAt": "2026-05-06"
    },
    {
        "id": 77,
        "hotelId": 5,
        "userId": 4,
        "username": "user4",
        "userName": "朱军",
        "rating": 5,
        "comment": "酒店管家的服务让我印象深刻，帮我订了餐厅还推荐了游玩路线。",
        "createdAt": "2026-05-05"
    },
    {
        "id": 78,
        "hotelId": 4,
        "userId": 5,
        "username": "traveler5",
        "userName": "徐畅",
        "rating": 5,
        "comment": "节假日期间入住的，虽然人多但酒店秩序井然，没有拥挤的感觉。",
        "createdAt": "2026-05-05"
    },
    {
        "id": 79,
        "hotelId": 5,
        "userId": 8,
        "username": "traveler8",
        "userName": "秦雪",
        "rating": 5,
        "comment": "第一次来这个城市，酒店给了很多游玩建议。位置就在市中心很方便。",
        "createdAt": "2026-05-04"
    },
    {
        "id": 80,
        "hotelId": 5,
        "userId": 2,
        "username": "user2",
        "userName": "乔铭",
        "rating": 5,
        "comment": "带老人小孩一起来的，酒店设施齐全，老人也很喜欢这里的环境。",
        "createdAt": "2026-05-02"
    },
    {
        "id": 81,
        "hotelId": 13,
        "userId": 12,
        "username": "traveler12",
        "userName": "宋琳",
        "rating": 3,
        "comment": "酒店的大堂很有气势，水晶吊灯加上大理石地面，气派又不会太浮夸。",
        "createdAt": "2026-05-01"
    },
    {
        "id": 82,
        "hotelId": 7,
        "userId": 10,
        "username": "traveler10",
        "userName": "于娟",
        "rating": 5,
        "comment": "酒店整体很新，设施都是智能化的，用起来很方便。浴室也很大。",
        "createdAt": "2026-05-01"
    },
    {
        "id": 83,
        "hotelId": 16,
        "userId": 7,
        "username": "traveler7",
        "userName": "孔帅",
        "rating": 4,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-05-01"
    },
    {
        "id": 84,
        "hotelId": 11,
        "userId": 11,
        "username": "traveler11",
        "userName": "林浩",
        "rating": 5,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-04-28"
    },
    {
        "id": 85,
        "hotelId": 16,
        "userId": 9,
        "username": "traveler9",
        "userName": "孔瑶",
        "rating": 3,
        "comment": "朋友推荐的，果然没有失望。视野开阔，拍照超级好看。",
        "createdAt": "2026-04-28"
    },
    {
        "id": 86,
        "hotelId": 10,
        "userId": 7,
        "username": "traveler7",
        "userName": "郝伟",
        "rating": 5,
        "comment": "第一次来这个城市，酒店给了很多游玩建议。位置就在市中心很方便。",
        "createdAt": "2026-04-26"
    },
    {
        "id": 87,
        "hotelId": 11,
        "userId": 8,
        "username": "traveler8",
        "userName": "汪雪",
        "rating": 4,
        "comment": "老建筑改造的酒店，保留了原有的历史韵味又加入了现代舒适设施。",
        "createdAt": "2026-04-26"
    },
    {
        "id": 88,
        "hotelId": 10,
        "userId": 4,
        "username": "user4",
        "userName": "钱飞",
        "rating": 4,
        "comment": "这家酒店最大的亮点是景观。无论大堂还是房间都能看到绝美的风景。",
        "createdAt": "2026-04-26"
    },
    {
        "id": 89,
        "hotelId": 1,
        "userId": 6,
        "username": "traveler6",
        "userName": "万丽",
        "rating": 3,
        "comment": "整个酒店充满了艺术气息，走廊里挂着当地艺术家的作品，像住在画廊里。",
        "createdAt": "2026-04-23"
    },
    {
        "id": 90,
        "hotelId": 5,
        "userId": 4,
        "username": "user4",
        "userName": "文浩",
        "rating": 5,
        "comment": "酒店有免费的洗衣服务，对于长途旅行的人来说这个细节太贴心了。",
        "createdAt": "2026-04-23"
    },
    {
        "id": 91,
        "hotelId": 2,
        "userId": 1,
        "username": "user1",
        "userName": "方宇",
        "rating": 4,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-04-23"
    },
    {
        "id": 92,
        "hotelId": 12,
        "userId": 2,
        "username": "user2",
        "userName": "范明",
        "rating": 5,
        "comment": "房间布置得很温馨，像回到了自己家一样。以后来这个城市就住这家了。",
        "createdAt": "2026-04-21"
    },
    {
        "id": 93,
        "hotelId": 11,
        "userId": 11,
        "username": "traveler11",
        "userName": "苏军",
        "rating": 4,
        "comment": "浴室的洗护用品都是品牌货，味道很好闻。浴缸也够大可以泡澡。",
        "createdAt": "2026-04-21"
    },
    {
        "id": 94,
        "hotelId": 6,
        "userId": 8,
        "username": "traveler8",
        "userName": "苏畅",
        "rating": 2,
        "comment": "非常满意的入住体验！房间干净整洁，服务周到，下次还会再来。",
        "createdAt": "2026-04-20"
    },
    {
        "id": 95,
        "hotelId": 7,
        "userId": 12,
        "username": "traveler12",
        "userName": "孟哲",
        "rating": 4,
        "comment": "酒店的SPA非常舒服，按摩师手法专业。游完泳再去做了个全身按摩。",
        "createdAt": "2026-04-19"
    },
    {
        "id": 96,
        "hotelId": 14,
        "userId": 1,
        "username": "user1",
        "userName": "任敏",
        "rating": 3,
        "comment": "来这个城市出差每次都住这家，已经成为习惯了。品质一直很稳定。",
        "createdAt": "2026-04-19"
    },
    {
        "id": 97,
        "hotelId": 6,
        "userId": 10,
        "username": "traveler10",
        "userName": "康瑶",
        "rating": 4,
        "comment": "酒店整体很新，设施都是智能化的，用起来很方便。浴室也很大。",
        "createdAt": "2026-04-18"
    },
    {
        "id": 98,
        "hotelId": 14,
        "userId": 10,
        "username": "traveler10",
        "userName": "邱帅",
        "rating": 5,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-04-15"
    },
    {
        "id": 99,
        "hotelId": 4,
        "userId": 11,
        "username": "traveler11",
        "userName": "孟睿",
        "rating": 4,
        "comment": "第一次来这个城市，酒店给了很多游玩建议。位置就在市中心很方便。",
        "createdAt": "2026-04-15"
    },
    {
        "id": 100,
        "hotelId": 6,
        "userId": 10,
        "username": "traveler10",
        "userName": "黄桂英",
        "rating": 4,
        "comment": "酒店的泳池太出片了！无边际设计配上远处的景色，随便拍都是大片。",
        "createdAt": "2026-04-15"
    },
    {
        "id": 101,
        "hotelId": 2,
        "userId": 11,
        "username": "traveler11",
        "userName": "蒋超",
        "rating": 5,
        "comment": "酒店离地铁站很近，去各个景点都很方便。前台还可以帮忙叫车。",
        "createdAt": "2026-04-13"
    },
    {
        "id": 102,
        "hotelId": 2,
        "userId": 8,
        "username": "traveler8",
        "userName": "沈涵",
        "rating": 4,
        "comment": "朋友推荐的，果然没有失望。视野开阔，拍照超级好看。",
        "createdAt": "2026-04-12"
    },
    {
        "id": 103,
        "hotelId": 8,
        "userId": 8,
        "username": "traveler8",
        "userName": "董超",
        "rating": 4,
        "comment": "酒店位置很好，出行方便。前台服务热情，办理入住很快。房间比想象中大。",
        "createdAt": "2026-04-11"
    },
    {
        "id": 104,
        "hotelId": 16,
        "userId": 2,
        "username": "user2",
        "userName": "李宁",
        "rating": 5,
        "comment": "浴室的洗护用品都是品牌货，味道很好闻。浴缸也够大可以泡澡。",
        "createdAt": "2026-04-11"
    },
    {
        "id": 105,
        "hotelId": 8,
        "userId": 4,
        "username": "user4",
        "userName": "潘秀英",
        "rating": 5,
        "comment": "非常满意的入住体验！房间干净整洁，服务周到，下次还会再来。",
        "createdAt": "2026-04-09"
    },
    {
        "id": 106,
        "hotelId": 8,
        "userId": 5,
        "username": "traveler5",
        "userName": "梁哲",
        "rating": 5,
        "comment": "性价比很高的一家酒店，设施齐全，早餐种类丰富。强烈推荐！",
        "createdAt": "2026-04-08"
    },
    {
        "id": 107,
        "hotelId": 14,
        "userId": 5,
        "username": "traveler5",
        "userName": "陈哲",
        "rating": 5,
        "comment": "节假日期间入住的，虽然人多但酒店秩序井然，没有拥挤的感觉。",
        "createdAt": "2026-04-08"
    },
    {
        "id": 108,
        "hotelId": 2,
        "userId": 6,
        "username": "traveler6",
        "userName": "吴鹏",
        "rating": 5,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-04-07"
    },
    {
        "id": 109,
        "hotelId": 14,
        "userId": 8,
        "username": "traveler8",
        "userName": "范涛",
        "rating": 4,
        "comment": "酒店整体很新，设施都是智能化的，用起来很方便。浴室也很大。",
        "createdAt": "2026-04-07"
    },
    {
        "id": 110,
        "hotelId": 15,
        "userId": 10,
        "username": "traveler10",
        "userName": "易鹏",
        "rating": 4,
        "comment": "入住当天正好是我的生日，酒店还送了一个小蛋糕，很惊喜很感动。",
        "createdAt": "2026-04-06"
    },
    {
        "id": 111,
        "hotelId": 14,
        "userId": 2,
        "username": "user2",
        "userName": "赖萱",
        "rating": 4,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-04-06"
    },
    {
        "id": 112,
        "hotelId": 1,
        "userId": 1,
        "username": "user1",
        "userName": "卢秀英",
        "rating": 5,
        "comment": "酒店离地铁站很近，去各个景点都很方便。前台还可以帮忙叫车。",
        "createdAt": "2026-04-05"
    },
    {
        "id": 113,
        "hotelId": 3,
        "userId": 3,
        "username": "user3",
        "userName": "周博",
        "rating": 5,
        "comment": "早餐可以在露台上吃，对着山景喝咖啡太惬意了。美好的一天从早餐开始。",
        "createdAt": "2026-04-04"
    },
    {
        "id": 114,
        "hotelId": 2,
        "userId": 5,
        "username": "traveler5",
        "userName": "方强",
        "rating": 3,
        "comment": "酒店的餐厅很惊艳，晚餐点了当地特色菜，味道正宗价格也很合理。",
        "createdAt": "2026-04-03"
    },
    {
        "id": 115,
        "hotelId": 6,
        "userId": 12,
        "username": "traveler12",
        "userName": "潘超",
        "rating": 4,
        "comment": "这家酒店最大的亮点是景观。无论大堂还是房间都能看到绝美的风景。",
        "createdAt": "2026-04-03"
    },
    {
        "id": 116,
        "hotelId": 13,
        "userId": 9,
        "username": "traveler9",
        "userName": "张瑶",
        "rating": 3,
        "comment": "酒店送的欢迎水果很新鲜，还有手写的欢迎卡片，感受到了用心。",
        "createdAt": "2026-04-02"
    },
    {
        "id": 117,
        "hotelId": 7,
        "userId": 3,
        "username": "user3",
        "userName": "姚鹏",
        "rating": 4,
        "comment": "酒店的泳池太出片了！无边际设计配上远处的景色，随便拍都是大片。",
        "createdAt": "2026-04-01"
    },
    {
        "id": 118,
        "hotelId": 1,
        "userId": 12,
        "username": "traveler12",
        "userName": "董桂英",
        "rating": 2,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-03-28"
    },
    {
        "id": 119,
        "hotelId": 7,
        "userId": 7,
        "username": "traveler7",
        "userName": "高欣",
        "rating": 5,
        "comment": "酒店整体很新，设施都是智能化的，用起来很方便。浴室也很大。",
        "createdAt": "2026-03-27"
    },
    {
        "id": 120,
        "hotelId": 5,
        "userId": 2,
        "username": "user2",
        "userName": "傅浩",
        "rating": 5,
        "comment": "老建筑改造的酒店，保留了原有的历史韵味又加入了现代舒适设施。",
        "createdAt": "2026-03-27"
    },
    {
        "id": 121,
        "hotelId": 4,
        "userId": 7,
        "username": "traveler7",
        "userName": "胡桂英",
        "rating": 3,
        "comment": "健身房24小时开放，器材很全。即使出差也不耽误锻炼，赞一个。",
        "createdAt": "2026-03-26"
    },
    {
        "id": 122,
        "hotelId": 10,
        "userId": 1,
        "username": "user1",
        "userName": "雷然",
        "rating": 5,
        "comment": "酒店有自己的停车场，对于自驾游的我们来说太方便了，免费停车。",
        "createdAt": "2026-03-25"
    },
    {
        "id": 123,
        "hotelId": 2,
        "userId": 6,
        "username": "traveler6",
        "userName": "冯涵",
        "rating": 5,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-03-25"
    },
    {
        "id": 124,
        "hotelId": 16,
        "userId": 8,
        "username": "traveler8",
        "userName": "邓畅",
        "rating": 5,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-03-25"
    },
    {
        "id": 125,
        "hotelId": 1,
        "userId": 4,
        "username": "user4",
        "userName": "任平",
        "rating": 5,
        "comment": "住过很多酒店，这家的床品是最舒服的。被子轻盈柔软，枕头高度刚好。",
        "createdAt": "2026-03-25"
    },
    {
        "id": 126,
        "hotelId": 12,
        "userId": 1,
        "username": "user1",
        "userName": "魏霞",
        "rating": 5,
        "comment": "第一次来这个城市，酒店给了很多游玩建议。位置就在市中心很方便。",
        "createdAt": "2026-03-25"
    },
    {
        "id": 127,
        "hotelId": 1,
        "userId": 11,
        "username": "traveler11",
        "userName": "易涛",
        "rating": 2,
        "comment": "酒店的大堂很有气势，水晶吊灯加上大理石地面，气派又不会太浮夸。",
        "createdAt": "2026-03-25"
    },
    {
        "id": 128,
        "hotelId": 4,
        "userId": 9,
        "username": "traveler9",
        "userName": "廖艳",
        "rating": 3,
        "comment": "房间里的茶具很精致，配的茶叶也很好喝。下午在阳台上喝茶看书太享受。",
        "createdAt": "2026-03-24"
    },
    {
        "id": 129,
        "hotelId": 1,
        "userId": 7,
        "username": "traveler7",
        "userName": "范娜",
        "rating": 4,
        "comment": "酒店离地铁站很近，去各个景点都很方便。前台还可以帮忙叫车。",
        "createdAt": "2026-03-24"
    },
    {
        "id": 130,
        "hotelId": 12,
        "userId": 5,
        "username": "traveler5",
        "userName": "梁雪",
        "rating": 3,
        "comment": "住在山里空气特别好，窗外就是层层叠叠的自然风光。远离城市喧嚣。",
        "createdAt": "2026-03-20"
    },
    {
        "id": 131,
        "hotelId": 12,
        "userId": 7,
        "username": "traveler7",
        "userName": "郑然",
        "rating": 4,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-03-20"
    },
    {
        "id": 132,
        "hotelId": 16,
        "userId": 8,
        "username": "traveler8",
        "userName": "刘帅",
        "rating": 3,
        "comment": "入住当天正好是我的生日，酒店还送了一个小蛋糕，很惊喜很感动。",
        "createdAt": "2026-03-20"
    },
    {
        "id": 133,
        "hotelId": 3,
        "userId": 2,
        "username": "user2",
        "userName": "卢博",
        "rating": 5,
        "comment": "带老人小孩一起来的，酒店设施齐全，老人也很喜欢这里的环境。",
        "createdAt": "2026-03-20"
    },
    {
        "id": 134,
        "hotelId": 5,
        "userId": 10,
        "username": "traveler10",
        "userName": "戴涛",
        "rating": 2,
        "comment": "夜景无敌！从房间窗户看出去整个城市灯火辉煌，太震撼了。",
        "createdAt": "2026-03-19"
    },
    {
        "id": 135,
        "hotelId": 13,
        "userId": 9,
        "username": "traveler9",
        "userName": "魏静",
        "rating": 4,
        "comment": "非常满意的入住体验！房间干净整洁，服务周到，下次还会再来。",
        "createdAt": "2026-03-18"
    },
    {
        "id": 136,
        "hotelId": 7,
        "userId": 10,
        "username": "traveler10",
        "userName": "郭明",
        "rating": 5,
        "comment": "浴室的洗护用品都是品牌货，味道很好闻。浴缸也够大可以泡澡。",
        "createdAt": "2026-03-18"
    },
    {
        "id": 137,
        "hotelId": 15,
        "userId": 2,
        "username": "user2",
        "userName": "邵军",
        "rating": 4,
        "comment": "住在山里空气特别好，窗外就是层层叠叠的自然风光。远离城市喧嚣。",
        "createdAt": "2026-03-17"
    },
    {
        "id": 138,
        "hotelId": 11,
        "userId": 12,
        "username": "traveler12",
        "userName": "戴勇",
        "rating": 5,
        "comment": "酒店有自己的停车场，对于自驾游的我们来说太方便了，免费停车。",
        "createdAt": "2026-03-17"
    },
    {
        "id": 139,
        "hotelId": 5,
        "userId": 9,
        "username": "traveler9",
        "userName": "高铭",
        "rating": 5,
        "comment": "节假日期间入住的，虽然人多但酒店秩序井然，没有拥挤的感觉。",
        "createdAt": "2026-03-17"
    },
    {
        "id": 140,
        "hotelId": 1,
        "userId": 3,
        "username": "user3",
        "userName": "陆婷",
        "rating": 3,
        "comment": "健身房24小时开放，器材很全。即使出差也不耽误锻炼，赞一个。",
        "createdAt": "2026-03-16"
    },
    {
        "id": 141,
        "hotelId": 2,
        "userId": 3,
        "username": "user3",
        "userName": "吕博",
        "rating": 4,
        "comment": "来这个城市出差每次都住这家，已经成为习惯了。品质一直很稳定。",
        "createdAt": "2026-03-15"
    },
    {
        "id": 142,
        "hotelId": 16,
        "userId": 8,
        "username": "traveler8",
        "userName": "康军",
        "rating": 5,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-03-15"
    },
    {
        "id": 143,
        "hotelId": 14,
        "userId": 6,
        "username": "traveler6",
        "userName": "任宇",
        "rating": 5,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-03-14"
    },
    {
        "id": 144,
        "hotelId": 11,
        "userId": 5,
        "username": "traveler5",
        "userName": "冯瑶",
        "rating": 4,
        "comment": "早餐可以在露台上吃，对着山景喝咖啡太惬意了。美好的一天从早餐开始。",
        "createdAt": "2026-03-13"
    },
    {
        "id": 145,
        "hotelId": 4,
        "userId": 12,
        "username": "traveler12",
        "userName": "彭鹏",
        "rating": 5,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-03-13"
    },
    {
        "id": 146,
        "hotelId": 8,
        "userId": 9,
        "username": "traveler9",
        "userName": "邹帅",
        "rating": 5,
        "comment": "酒店离地铁站很近，去各个景点都很方便。前台还可以帮忙叫车。",
        "createdAt": "2026-03-13"
    },
    {
        "id": 147,
        "hotelId": 12,
        "userId": 8,
        "username": "traveler8",
        "userName": "赖敏",
        "rating": 4,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-03-13"
    },
    {
        "id": 148,
        "hotelId": 1,
        "userId": 10,
        "username": "traveler10",
        "userName": "郝军",
        "rating": 4,
        "comment": "性价比很高的一家酒店，设施齐全，早餐种类丰富。强烈推荐！",
        "createdAt": "2026-03-12"
    },
    {
        "id": 149,
        "hotelId": 9,
        "userId": 1,
        "username": "user1",
        "userName": "谢超",
        "rating": 4,
        "comment": "酒店的泳池太出片了！无边际设计配上远处的景色，随便拍都是大片。",
        "createdAt": "2026-03-12"
    },
    {
        "id": 150,
        "hotelId": 10,
        "userId": 4,
        "username": "user4",
        "userName": "叶浩",
        "rating": 4,
        "comment": "夜景无敌！从房间窗户看出去整个城市灯火辉煌，太震撼了。",
        "createdAt": "2026-03-10"
    },
    {
        "id": 151,
        "hotelId": 8,
        "userId": 6,
        "username": "traveler6",
        "userName": "谢慧",
        "rating": 5,
        "comment": "酒店的设计融合了当地文化元素，很有特色。住在这里就像住进了景点。",
        "createdAt": "2026-03-09"
    },
    {
        "id": 152,
        "hotelId": 16,
        "userId": 11,
        "username": "traveler11",
        "userName": "程超",
        "rating": 4,
        "comment": "住在山里空气特别好，窗外就是层层叠叠的自然风光。远离城市喧嚣。",
        "createdAt": "2026-03-08"
    },
    {
        "id": 153,
        "hotelId": 10,
        "userId": 1,
        "username": "user1",
        "userName": "史敏",
        "rating": 5,
        "comment": "酒店的图书馆太棒了，有各种书籍可以借阅。晚上在这里看书很安静。",
        "createdAt": "2026-03-08"
    },
    {
        "id": 154,
        "hotelId": 8,
        "userId": 8,
        "username": "traveler8",
        "userName": "江伟",
        "rating": 3,
        "comment": "酒店位置很好，出行方便。前台服务热情，办理入住很快。房间比想象中大。",
        "createdAt": "2026-03-07"
    },
    {
        "id": 155,
        "hotelId": 4,
        "userId": 4,
        "username": "user4",
        "userName": "胡鑫",
        "rating": 5,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-03-06"
    },
    {
        "id": 156,
        "hotelId": 6,
        "userId": 1,
        "username": "user1",
        "userName": "张刚",
        "rating": 4,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-03-06"
    },
    {
        "id": 157,
        "hotelId": 5,
        "userId": 9,
        "username": "traveler9",
        "userName": "陈琳",
        "rating": 5,
        "comment": "酒店的设计融合了当地文化元素，很有特色。住在这里就像住进了景点。",
        "createdAt": "2026-03-04"
    },
    {
        "id": 158,
        "hotelId": 1,
        "userId": 1,
        "username": "user1",
        "userName": "萧娜",
        "rating": 3,
        "comment": "酒店的餐厅很惊艳，晚餐点了当地特色菜，味道正宗价格也很合理。",
        "createdAt": "2026-03-03"
    },
    {
        "id": 159,
        "hotelId": 4,
        "userId": 2,
        "username": "user2",
        "userName": "金杰",
        "rating": 4,
        "comment": "带老人小孩一起来的，酒店设施齐全，老人也很喜欢这里的环境。",
        "createdAt": "2026-03-03"
    },
    {
        "id": 160,
        "hotelId": 4,
        "userId": 10,
        "username": "traveler10",
        "userName": "杨桂英",
        "rating": 4,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-03-03"
    },
    {
        "id": 161,
        "hotelId": 1,
        "userId": 11,
        "username": "traveler11",
        "userName": "邱秀英",
        "rating": 4,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-03-03"
    },
    {
        "id": 162,
        "hotelId": 14,
        "userId": 7,
        "username": "traveler7",
        "userName": "谢瑶",
        "rating": 4,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-03-03"
    },
    {
        "id": 163,
        "hotelId": 6,
        "userId": 1,
        "username": "user1",
        "userName": "杜雪",
        "rating": 4,
        "comment": "浴室的洗护用品都是品牌货，味道很好闻。浴缸也够大可以泡澡。",
        "createdAt": "2026-03-02"
    },
    {
        "id": 164,
        "hotelId": 4,
        "userId": 11,
        "username": "traveler11",
        "userName": "薛欣",
        "rating": 3,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-03-02"
    },
    {
        "id": 165,
        "hotelId": 2,
        "userId": 6,
        "username": "traveler6",
        "userName": "程俊",
        "rating": 5,
        "comment": "酒店管家的服务让我印象深刻，帮我订了餐厅还推荐了游玩路线。",
        "createdAt": "2026-03-02"
    },
    {
        "id": 166,
        "hotelId": 6,
        "userId": 2,
        "username": "user2",
        "userName": "韩秀兰",
        "rating": 5,
        "comment": "酒店管家的服务让我印象深刻，帮我订了餐厅还推荐了游玩路线。",
        "createdAt": "2026-03-01"
    },
    {
        "id": 167,
        "hotelId": 4,
        "userId": 11,
        "username": "traveler11",
        "userName": "杨畅",
        "rating": 5,
        "comment": "早餐可以在露台上吃，对着山景喝咖啡太惬意了。美好的一天从早餐开始。",
        "createdAt": "2026-02-27"
    },
    {
        "id": 168,
        "hotelId": 16,
        "userId": 8,
        "username": "traveler8",
        "userName": "钟然",
        "rating": 4,
        "comment": "周边的老街很有味道，酒店位置闹中取静，出门右转就是美食街。",
        "createdAt": "2026-02-27"
    },
    {
        "id": 169,
        "hotelId": 6,
        "userId": 5,
        "username": "traveler5",
        "userName": "郝伟",
        "rating": 4,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-02-27"
    },
    {
        "id": 170,
        "hotelId": 5,
        "userId": 1,
        "username": "user1",
        "userName": "丁欣",
        "rating": 5,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-02-27"
    },
    {
        "id": 171,
        "hotelId": 14,
        "userId": 10,
        "username": "traveler10",
        "userName": "乔军",
        "rating": 3,
        "comment": "早餐可以在露台上吃，对着山景喝咖啡太惬意了。美好的一天从早餐开始。",
        "createdAt": "2026-02-26"
    },
    {
        "id": 172,
        "hotelId": 5,
        "userId": 5,
        "username": "traveler5",
        "userName": "高宇",
        "rating": 5,
        "comment": "周边的老街很有味道，酒店位置闹中取静，出门右转就是美食街。",
        "createdAt": "2026-02-26"
    },
    {
        "id": 173,
        "hotelId": 6,
        "userId": 3,
        "username": "user3",
        "userName": "黎桐",
        "rating": 3,
        "comment": "淡季来的性价比超高。同样的房型比旺季便宜一半还多，赚到了。",
        "createdAt": "2026-02-26"
    },
    {
        "id": 174,
        "hotelId": 2,
        "userId": 3,
        "username": "user3",
        "userName": "汤晨",
        "rating": 5,
        "comment": "酒店整体很新，设施都是智能化的，用起来很方便。浴室也很大。",
        "createdAt": "2026-02-25"
    },
    {
        "id": 175,
        "hotelId": 12,
        "userId": 10,
        "username": "traveler10",
        "userName": "韩桐",
        "rating": 5,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-02-25"
    },
    {
        "id": 176,
        "hotelId": 5,
        "userId": 10,
        "username": "traveler10",
        "userName": "黄伟",
        "rating": 5,
        "comment": "第一次来这个城市，酒店给了很多游玩建议。位置就在市中心很方便。",
        "createdAt": "2026-02-25"
    },
    {
        "id": 177,
        "hotelId": 9,
        "userId": 9,
        "username": "traveler9",
        "userName": "李婷",
        "rating": 2,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-02-24"
    },
    {
        "id": 178,
        "hotelId": 14,
        "userId": 7,
        "username": "traveler7",
        "userName": "于欣",
        "rating": 4,
        "comment": "房间布置得很温馨，像回到了自己家一样。以后来这个城市就住这家了。",
        "createdAt": "2026-02-23"
    },
    {
        "id": 179,
        "hotelId": 4,
        "userId": 12,
        "username": "traveler12",
        "userName": "郝军",
        "rating": 5,
        "comment": "健身房24小时开放，器材很全。即使出差也不耽误锻炼，赞一个。",
        "createdAt": "2026-02-23"
    },
    {
        "id": 180,
        "hotelId": 1,
        "userId": 9,
        "username": "traveler9",
        "userName": "赖欣",
        "rating": 5,
        "comment": "周边的老街很有味道，酒店位置闹中取静，出门右转就是美食街。",
        "createdAt": "2026-02-23"
    },
    {
        "id": 181,
        "hotelId": 11,
        "userId": 12,
        "username": "traveler12",
        "userName": "徐鹏",
        "rating": 4,
        "comment": "性价比很高的一家酒店，设施齐全，早餐种类丰富。强烈推荐！",
        "createdAt": "2026-02-23"
    },
    {
        "id": 182,
        "hotelId": 16,
        "userId": 4,
        "username": "user4",
        "userName": "林磊",
        "rating": 3,
        "comment": "节假日期间入住的，虽然人多但酒店秩序井然，没有拥挤的感觉。",
        "createdAt": "2026-02-23"
    },
    {
        "id": 183,
        "hotelId": 14,
        "userId": 12,
        "username": "traveler12",
        "userName": "卢博",
        "rating": 5,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-02-22"
    },
    {
        "id": 184,
        "hotelId": 5,
        "userId": 5,
        "username": "traveler5",
        "userName": "杨秀英",
        "rating": 4,
        "comment": "房间布置得很温馨，像回到了自己家一样。以后来这个城市就住这家了。",
        "createdAt": "2026-02-21"
    },
    {
        "id": 185,
        "hotelId": 16,
        "userId": 5,
        "username": "traveler5",
        "userName": "文娟",
        "rating": 4,
        "comment": "房间里的茶具很精致，配的茶叶也很好喝。下午在阳台上喝茶看书太享受。",
        "createdAt": "2026-02-21"
    },
    {
        "id": 186,
        "hotelId": 6,
        "userId": 11,
        "username": "traveler11",
        "userName": "贺然",
        "rating": 4,
        "comment": "酒店的图书馆太棒了，有各种书籍可以借阅。晚上在这里看书很安静。",
        "createdAt": "2026-02-21"
    },
    {
        "id": 187,
        "hotelId": 10,
        "userId": 1,
        "username": "user1",
        "userName": "龙刚",
        "rating": 3,
        "comment": "酒店的大堂很有气势，水晶吊灯加上大理石地面，气派又不会太浮夸。",
        "createdAt": "2026-02-20"
    },
    {
        "id": 188,
        "hotelId": 14,
        "userId": 9,
        "username": "traveler9",
        "userName": "李强",
        "rating": 5,
        "comment": "房间布置得很温馨，像回到了自己家一样。以后来这个城市就住这家了。",
        "createdAt": "2026-02-18"
    },
    {
        "id": 189,
        "hotelId": 3,
        "userId": 10,
        "username": "traveler10",
        "userName": "夏娜",
        "rating": 5,
        "comment": "第一次来这个城市，酒店给了很多游玩建议。位置就在市中心很方便。",
        "createdAt": "2026-02-17"
    },
    {
        "id": 190,
        "hotelId": 1,
        "userId": 11,
        "username": "traveler11",
        "userName": "许宁",
        "rating": 5,
        "comment": "虽然是连锁酒店但完全不输五星级。卫生干净服务标准，性价比极高。",
        "createdAt": "2026-02-16"
    },
    {
        "id": 191,
        "hotelId": 12,
        "userId": 4,
        "username": "user4",
        "userName": "何飞",
        "rating": 4,
        "comment": "来这个城市出差每次都住这家，已经成为习惯了。品质一直很稳定。",
        "createdAt": "2026-02-15"
    },
    {
        "id": 192,
        "hotelId": 15,
        "userId": 12,
        "username": "traveler12",
        "userName": "魏静",
        "rating": 4,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-02-14"
    },
    {
        "id": 193,
        "hotelId": 8,
        "userId": 6,
        "username": "traveler6",
        "userName": "吕娟",
        "rating": 5,
        "comment": "前台小姐姐办理入住的时候特别耐心，还帮我升级了能看到好风景的房间。",
        "createdAt": "2026-02-13"
    },
    {
        "id": 194,
        "hotelId": 10,
        "userId": 11,
        "username": "traveler11",
        "userName": "夏哲",
        "rating": 5,
        "comment": "酒店的泳池太出片了！无边际设计配上远处的景色，随便拍都是大片。",
        "createdAt": "2026-02-13"
    },
    {
        "id": 195,
        "hotelId": 2,
        "userId": 5,
        "username": "traveler5",
        "userName": "姚强",
        "rating": 5,
        "comment": "酒店有自己的停车场，对于自驾游的我们来说太方便了，免费停车。",
        "createdAt": "2026-02-13"
    },
    {
        "id": 196,
        "hotelId": 1,
        "userId": 2,
        "username": "user2",
        "userName": "张慧",
        "rating": 4,
        "comment": "酒店管家的服务让我印象深刻，帮我订了餐厅还推荐了游玩路线。",
        "createdAt": "2026-02-13"
    },
    {
        "id": 197,
        "hotelId": 15,
        "userId": 4,
        "username": "user4",
        "userName": "金涛",
        "rating": 5,
        "comment": "浴室的洗护用品都是品牌货，味道很好闻。浴缸也够大可以泡澡。",
        "createdAt": "2026-02-12"
    },
    {
        "id": 198,
        "hotelId": 8,
        "userId": 9,
        "username": "traveler9",
        "userName": "杜浩",
        "rating": 3,
        "comment": "朋友推荐的，果然没有失望。视野开阔，拍照超级好看。",
        "createdAt": "2026-02-11"
    },
    {
        "id": 199,
        "hotelId": 8,
        "userId": 7,
        "username": "traveler7",
        "userName": "方琳",
        "rating": 5,
        "comment": "健身房24小时开放，器材很全。即使出差也不耽误锻炼，赞一个。",
        "createdAt": "2026-02-11"
    },
    {
        "id": 200,
        "hotelId": 13,
        "userId": 9,
        "username": "traveler9",
        "userName": "范明",
        "rating": 5,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-02-10"
    },
    {
        "id": 201,
        "hotelId": 5,
        "userId": 7,
        "username": "traveler7",
        "userName": "谭秀英",
        "rating": 3,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-02-10"
    },
    {
        "id": 202,
        "hotelId": 1,
        "userId": 11,
        "username": "traveler11",
        "userName": "郝霞",
        "rating": 2,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-02-09"
    },
    {
        "id": 203,
        "hotelId": 4,
        "userId": 1,
        "username": "user1",
        "userName": "潘然",
        "rating": 5,
        "comment": "酒店装修很有特色，每个角落都适合拍照打卡。早餐也很精致。",
        "createdAt": "2026-02-07"
    },
    {
        "id": 204,
        "hotelId": 4,
        "userId": 1,
        "username": "user1",
        "userName": "孟欣",
        "rating": 3,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-02-06"
    },
    {
        "id": 205,
        "hotelId": 16,
        "userId": 11,
        "username": "traveler11",
        "userName": "于明",
        "rating": 4,
        "comment": "夜景无敌！从房间窗户看出去整个城市灯火辉煌，太震撼了。",
        "createdAt": "2026-02-06"
    },
    {
        "id": 206,
        "hotelId": 14,
        "userId": 10,
        "username": "traveler10",
        "userName": "范涛",
        "rating": 4,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-02-04"
    },
    {
        "id": 207,
        "hotelId": 2,
        "userId": 3,
        "username": "user3",
        "userName": "罗宁",
        "rating": 2,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-02-04"
    },
    {
        "id": 208,
        "hotelId": 2,
        "userId": 5,
        "username": "traveler5",
        "userName": "汪娜",
        "rating": 4,
        "comment": "离机场很近，有免费的接送机服务。对于赶早班机的人来说太方便了。",
        "createdAt": "2026-02-03"
    },
    {
        "id": 209,
        "hotelId": 3,
        "userId": 7,
        "username": "traveler7",
        "userName": "吕铭",
        "rating": 5,
        "comment": "整个酒店充满了艺术气息，走廊里挂着当地艺术家的作品，像住在画廊里。",
        "createdAt": "2026-02-03"
    },
    {
        "id": 210,
        "hotelId": 2,
        "userId": 3,
        "username": "user3",
        "userName": "秦涵",
        "rating": 4,
        "comment": "性价比很高的一家酒店，设施齐全，早餐种类丰富。强烈推荐！",
        "createdAt": "2026-02-03"
    },
    {
        "id": 211,
        "hotelId": 2,
        "userId": 10,
        "username": "traveler10",
        "userName": "方鹏",
        "rating": 3,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-02-02"
    },
    {
        "id": 212,
        "hotelId": 1,
        "userId": 2,
        "username": "user2",
        "userName": "邵晨",
        "rating": 5,
        "comment": "酒店送的欢迎水果很新鲜，还有手写的欢迎卡片，感受到了用心。",
        "createdAt": "2026-02-02"
    },
    {
        "id": 213,
        "hotelId": 13,
        "userId": 6,
        "username": "traveler6",
        "userName": "董磊",
        "rating": 4,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-01-28"
    },
    {
        "id": 214,
        "hotelId": 2,
        "userId": 6,
        "username": "traveler6",
        "userName": "曹磊",
        "rating": 4,
        "comment": "第一次来这个城市，酒店给了很多游玩建议。位置就在市中心很方便。",
        "createdAt": "2026-01-27"
    },
    {
        "id": 215,
        "hotelId": 6,
        "userId": 6,
        "username": "traveler6",
        "userName": "罗涵",
        "rating": 3,
        "comment": "朋友推荐的，果然没有失望。视野开阔，拍照超级好看。",
        "createdAt": "2026-01-27"
    },
    {
        "id": 216,
        "hotelId": 16,
        "userId": 7,
        "username": "traveler7",
        "userName": "徐文",
        "rating": 5,
        "comment": "周边的老街很有味道，酒店位置闹中取静，出门右转就是美食街。",
        "createdAt": "2026-01-27"
    },
    {
        "id": 217,
        "hotelId": 14,
        "userId": 8,
        "username": "traveler8",
        "userName": "谭军",
        "rating": 2,
        "comment": "节假日期间入住的，虽然人多但酒店秩序井然，没有拥挤的感觉。",
        "createdAt": "2026-01-26"
    },
    {
        "id": 218,
        "hotelId": 13,
        "userId": 8,
        "username": "traveler8",
        "userName": "潘涛",
        "rating": 5,
        "comment": "房间布置得很温馨，像回到了自己家一样。以后来这个城市就住这家了。",
        "createdAt": "2026-01-25"
    },
    {
        "id": 219,
        "hotelId": 12,
        "userId": 3,
        "username": "user3",
        "userName": "秦博",
        "rating": 2,
        "comment": "住在山里空气特别好，窗外就是层层叠叠的自然风光。远离城市喧嚣。",
        "createdAt": "2026-01-25"
    },
    {
        "id": 220,
        "hotelId": 8,
        "userId": 4,
        "username": "user4",
        "userName": "朱桂英",
        "rating": 3,
        "comment": "酒店离地铁站很近，去各个景点都很方便。前台还可以帮忙叫车。",
        "createdAt": "2026-01-25"
    },
    {
        "id": 221,
        "hotelId": 16,
        "userId": 5,
        "username": "traveler5",
        "userName": "于秀英",
        "rating": 4,
        "comment": "酒店有自己的停车场，对于自驾游的我们来说太方便了，免费停车。",
        "createdAt": "2026-01-24"
    },
    {
        "id": 222,
        "hotelId": 14,
        "userId": 6,
        "username": "traveler6",
        "userName": "胡雪",
        "rating": 5,
        "comment": "酒店送的欢迎水果很新鲜，还有手写的欢迎卡片，感受到了用心。",
        "createdAt": "2026-01-24"
    },
    {
        "id": 223,
        "hotelId": 16,
        "userId": 2,
        "username": "user2",
        "userName": "毛哲",
        "rating": 3,
        "comment": "早餐可以在露台上吃，对着山景喝咖啡太惬意了。美好的一天从早餐开始。",
        "createdAt": "2026-01-23"
    },
    {
        "id": 224,
        "hotelId": 15,
        "userId": 12,
        "username": "traveler12",
        "userName": "方萱",
        "rating": 5,
        "comment": "带老人小孩一起来的，酒店设施齐全，老人也很喜欢这里的环境。",
        "createdAt": "2026-01-23"
    },
    {
        "id": 225,
        "hotelId": 10,
        "userId": 8,
        "username": "traveler8",
        "userName": "曹涵",
        "rating": 5,
        "comment": "酒店送的欢迎水果很新鲜，还有手写的欢迎卡片，感受到了用心。",
        "createdAt": "2026-01-23"
    },
    {
        "id": 226,
        "hotelId": 1,
        "userId": 12,
        "username": "traveler12",
        "userName": "傅涛",
        "rating": 5,
        "comment": "酒店有免费的洗衣服务，对于长途旅行的人来说这个细节太贴心了。",
        "createdAt": "2026-01-22"
    },
    {
        "id": 227,
        "hotelId": 5,
        "userId": 6,
        "username": "traveler6",
        "userName": "夏浩",
        "rating": 4,
        "comment": "离机场很近，有免费的接送机服务。对于赶早班机的人来说太方便了。",
        "createdAt": "2026-01-22"
    },
    {
        "id": 228,
        "hotelId": 6,
        "userId": 9,
        "username": "traveler9",
        "userName": "石明",
        "rating": 3,
        "comment": "环境优雅安静，床品舒适，一觉睡到天亮。酒店的设计很有格调。",
        "createdAt": "2026-01-21"
    },
    {
        "id": 229,
        "hotelId": 12,
        "userId": 11,
        "username": "traveler11",
        "userName": "汤铭",
        "rating": 1,
        "comment": "酒店旁边的公园很适合晨跑，环境好空气清新，跑完回酒店吃早餐正好。",
        "createdAt": "2026-01-21"
    },
    {
        "id": 230,
        "hotelId": 16,
        "userId": 11,
        "username": "traveler11",
        "userName": "许哲",
        "rating": 2,
        "comment": "带宠物一起来的，酒店是宠物友好的，还准备了宠物床和零食。",
        "createdAt": "2026-01-20"
    },
    {
        "id": 231,
        "hotelId": 10,
        "userId": 10,
        "username": "traveler10",
        "userName": "程桐",
        "rating": 5,
        "comment": "和闺蜜一起来度假的，酒店有自行车可以免费租，环湖骑行很开心。",
        "createdAt": "2026-01-20"
    },
    {
        "id": 232,
        "hotelId": 8,
        "userId": 5,
        "username": "traveler5",
        "userName": "谢俊",
        "rating": 4,
        "comment": "这家酒店最大的亮点是景观。无论大堂还是房间都能看到绝美的风景。",
        "createdAt": "2026-01-16"
    },
    {
        "id": 233,
        "hotelId": 8,
        "userId": 3,
        "username": "user3",
        "userName": "夏勇",
        "rating": 5,
        "comment": "早餐可以在露台上吃，对着山景喝咖啡太惬意了。美好的一天从早餐开始。",
        "createdAt": "2026-01-15"
    },
    {
        "id": 234,
        "hotelId": 12,
        "userId": 12,
        "username": "traveler12",
        "userName": "苏晨",
        "rating": 4,
        "comment": "老建筑改造的酒店，保留了原有的历史韵味又加入了现代舒适设施。",
        "createdAt": "2026-01-13"
    },
    {
        "id": 235,
        "hotelId": 3,
        "userId": 4,
        "username": "user4",
        "userName": "田桂英",
        "rating": 2,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-01-13"
    },
    {
        "id": 236,
        "hotelId": 14,
        "userId": 5,
        "username": "traveler5",
        "userName": "徐飞",
        "rating": 5,
        "comment": "酒店有自己的停车场，对于自驾游的我们来说太方便了，免费停车。",
        "createdAt": "2026-01-12"
    },
    {
        "id": 237,
        "hotelId": 16,
        "userId": 2,
        "username": "user2",
        "userName": "唐磊",
        "rating": 5,
        "comment": "这家酒店最大的亮点是景观。无论大堂还是房间都能看到绝美的风景。",
        "createdAt": "2026-01-12"
    },
    {
        "id": 238,
        "hotelId": 1,
        "userId": 8,
        "username": "traveler8",
        "userName": "邹雪",
        "rating": 5,
        "comment": "酒店的SPA非常舒服，按摩师手法专业。游完泳再去做了个全身按摩。",
        "createdAt": "2026-01-11"
    },
    {
        "id": 239,
        "hotelId": 15,
        "userId": 1,
        "username": "user1",
        "userName": "曾艳",
        "rating": 5,
        "comment": "房间的隔音效果很好，虽然临街但一点不吵。枕头有软硬两种可选。",
        "createdAt": "2026-01-11"
    },
    {
        "id": 240,
        "hotelId": 12,
        "userId": 8,
        "username": "traveler8",
        "userName": "郝磊",
        "rating": 4,
        "comment": "服务态度特别好，有求必应。还主动帮忙升级了房型，太暖心了。",
        "createdAt": "2026-01-10"
    },
    {
        "id": 241,
        "hotelId": 14,
        "userId": 2,
        "username": "user2",
        "userName": "文秀兰",
        "rating": 5,
        "comment": "住了三晚，每天房间都打扫得很干净。周边吃的也多，交通方便。",
        "createdAt": "2026-01-08"
    },
    {
        "id": 242,
        "hotelId": 3,
        "userId": 7,
        "username": "traveler7",
        "userName": "杜刚",
        "rating": 4,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-01-07"
    },
    {
        "id": 243,
        "hotelId": 1,
        "userId": 10,
        "username": "traveler10",
        "userName": "贺慧",
        "rating": 4,
        "comment": "虽然是连锁酒店但完全不输五星级。卫生干净服务标准，性价比极高。",
        "createdAt": "2026-01-07"
    },
    {
        "id": 244,
        "hotelId": 13,
        "userId": 7,
        "username": "traveler7",
        "userName": "龙怡",
        "rating": 1,
        "comment": "这家酒店最大的亮点是景观。无论大堂还是房间都能看到绝美的风景。",
        "createdAt": "2026-01-05"
    },
    {
        "id": 245,
        "hotelId": 4,
        "userId": 11,
        "username": "traveler11",
        "userName": "姜哲",
        "rating": 5,
        "comment": "出差住了三天，酒店的商务设施很完善，会议室、打印机一应俱全。",
        "createdAt": "2026-01-05"
    },
    {
        "id": 246,
        "hotelId": 4,
        "userId": 5,
        "username": "traveler5",
        "userName": "郑俊",
        "rating": 2,
        "comment": "酒店的设计融合了当地文化元素，很有特色。住在这里就像住进了景点。",
        "createdAt": "2026-01-04"
    },
    {
        "id": 247,
        "hotelId": 1,
        "userId": 5,
        "username": "traveler5",
        "userName": "程秀英",
        "rating": 5,
        "comment": "来这个城市出差每次都住这家，已经成为习惯了。品质一直很稳定。",
        "createdAt": "2026-01-03"
    },
    {
        "id": 248,
        "hotelId": 16,
        "userId": 11,
        "username": "traveler11",
        "userName": "吕娟",
        "rating": 3,
        "comment": "酒店整体很新，设施都是智能化的，用起来很方便。浴室也很大。",
        "createdAt": "2026-01-02"
    },
    {
        "id": 249,
        "hotelId": 16,
        "userId": 8,
        "username": "traveler8",
        "userName": "林超",
        "rating": 4,
        "comment": "酒店整体很新，设施都是智能化的，用起来很方便。浴室也很大。",
        "createdAt": "2026-01-02"
    },
    {
        "id": 250,
        "hotelId": 5,
        "userId": 9,
        "username": "traveler9",
        "userName": "任涛",
        "rating": 5,
        "comment": "房间里的茶具很精致，配的茶叶也很好喝。下午在阳台上喝茶看书太享受。",
        "createdAt": "2026-01-02"
    }
];

// 加载评价数据
function loadReviews() {
    try {
        const data = localStorage.getItem('hotel_reviews');
        return data ? JSON.parse(data) : defaultReviews;
    } catch (e) {
        return defaultReviews;
    }
}

// 保存评价数据
function saveReviews(reviews) {
    localStorage.setItem('hotel_reviews', JSON.stringify(reviews));
}

// 获取指定酒店的评价
function getHotelReviews(hotelId) {
    const reviews = loadReviews();
    return reviews.filter(r => r.hotelId === hotelId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// 添加评价
function addReview(hotelId, userId, username, userName, rating, comment) {
    const reviews = loadReviews();
    const newReview = {
        id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
        hotelId, userId, username, userName,
        rating, comment,
        createdAt: new Date().toISOString().split('T')[0]
    };
    reviews.unshift(newReview);
    saveReviews(reviews);
    return newReview;
}

// 获取酒店平均评分
function getHotelAvgRating(hotelId) {
    const reviews = getHotelReviews(hotelId);
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((s, r) => s + r.rating, 0);
    return Math.round((sum / reviews.length) * 10) / 10;
}
