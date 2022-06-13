// 首先导入mongoose
const mongoose = require("mongoose");
// 链接服务器
mongoose.connect("mongodb://localhost:27017/fruitsDB");
// 创建一个模块
const humanSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Human = mongoose.model("pn", humanSchema);

const human = new Human({
    name: "小王",
    age: 18
});

human.save();