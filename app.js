const express = require('express');
const app = express();
const path = require ('path');
const exphbs = require('express-handlebars');
var parser = require('body-parser');

app.use(parser.json());

app.engine('hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs'
}));

app.set('views',path.join(__dirname,"views"));
app.set("view engine","hbs");

app.use(express.static(__dirname+'/views'));
app.use(express.static('views/images'));
app.get('/', (req,res)=>{
	res.render('home');
});

app.get('/home', (req,res)=>{
	res.render('home');
});

app.get('/INFERNO/1', (req,res)=>{
	res.render('INFERNO/1');
});

app.get('/INFERNO/2', (req,res)=>{
	res.render('INFERNO/2');
});

app.get('/INFERNO/3', (req,res)=>{
	res.render('INFERNO/3');
});

app.get('/INFERNO/4', (req,res)=>{
	res.render('INFERNO/4');
});

app.get('/INFERNO/5', (req,res)=>{
	res.render('INFERNO/5');
});

app.get('/INFERNO/6', (req,res)=>{
	res.render('INFERNO/6');
});

app.get('/INFERNO/7', (req,res)=>{
	res.render('INFERNO/7');
});

app.get('/INFERNO/8', (req,res)=>{
	res.render('INFERNO/8');
});

app.get('/INFERNO/9', (req,res)=>{
	res.render('INFERNO/9');
});

app.get('/INFERNO/10', (req,res)=>{
	res.render('INFERNO/10');
});

app.get('/INFERNO/11', (req,res)=>{
	res.render('INFERNO/11');
});

app.get('/INFERNO/12', (req,res)=>{
	res.render('INFERNO/12');
});

app.get('/INFERNO/13', (req,res)=>{
	res.render('INFERNO/13');
});

app.get('/INFERNO/14', (req,res)=>{
	res.render('INFERNO/14');
});

app.get('/INFERNO/15', (req,res)=>{
	res.render('INFERNO/15');
});

app.get('/INFERNO/16', (req,res)=>{
	res.render('INFERNO/16');
});

app.get('/INFERNO/17', (req,res)=>{
	res.render('INFERNO/17');
});

app.get('/INFERNO/18', (req,res)=>{
	res.render('INFERNO/18');
});

app.get('/INFERNO/19', (req,res)=>{
	res.render('INFERNO/19');
});

app.get('/INFERNO/20', (req,res)=>{
	res.render('INFERNO/20');
});

app.get('/INFERNO/21', (req,res)=>{
	res.render('INFERNO/21');
});

app.get('/INFERNO/22', (req,res)=>{
	res.render('INFERNO/22');
});

app.get('/INFERNO/23', (req,res)=>{
	res.render('INFERNO/23');
});

app.get('/INFERNO/24', (req,res)=>{
	res.render('INFERNO/24');
});

app.get('/INFERNO/25', (req,res)=>{
	res.render('INFERNO/25');
});

app.get('/INFERNO/26', (req,res)=>{
	res.render('INFERNO/26');
});

app.get('/INFERNO/27', (req,res)=>{
	res.render('INFERNO/27');
});

app.get('/INFERNO/28', (req,res)=>{
	res.render('INFERNO/28');
});

app.get('/INFERNO/29', (req,res)=>{
	res.render('INFERNO/29');
});

app.get('/INFERNO/30', (req,res)=>{
	res.render('INFERNO/30');
});

app.get('/INFERNO/31', (req,res)=>{
	res.render('INFERNO/31');
});

app.get('/INFERNO/32', (req,res)=>{
	res.render('INFERNO/32');
});

app.get('/INFERNO/33', (req,res)=>{
	res.render('INFERNO/33');
});

app.get('/INFERNO/34', (req,res)=>{
	res.render('INFERNO/34');
});

app.get('/PURGATORIO/1', (req,res)=>{
	res.render('PURGATORIO/1');
});

app.get('/PURGATORIO/2', (req,res)=>{
	res.render('PURGATORIO/2');
});

app.get('/PURGATORIO/3', (req,res)=>{
	res.render('PURGATORIO/3');
});

app.get('/PURGATORIO/4', (req,res)=>{
	res.render('PURGATORIO/4');
});

app.get('/PURGATORIO/5', (req,res)=>{
	res.render('PURGATORIO/5');
});

app.get('/PURGATORIO/6', (req,res)=>{
	res.render('PURGATORIO/6');
});

app.get('/PURGATORIO/7', (req,res)=>{
	res.render('PURGATORIO/7');
});

app.get('/PURGATORIO/8', (req,res)=>{
	res.render('PURGATORIO/8');
});

app.get('/PURGATORIO/9', (req,res)=>{
	res.render('PURGATORIO/9');
});

app.get('/PURGATORIO/10', (req,res)=>{
	res.render('PURGATORIO/10');
});

app.get('/PURGATORIO/11', (req,res)=>{
	res.render('PURGATORIO/11');
});

app.get('/PURGATORIO/12', (req,res)=>{
	res.render('PURGATORIO/12');
});

app.get('/PURGATORIO/13', (req,res)=>{
	res.render('PURGATORIO/13');
});

app.get('/PURGATORIO/14', (req,res)=>{
	res.render('PURGATORIO/14');
});

app.get('/PURGATORIO/15', (req,res)=>{
	res.render('PURGATORIO/15');
});

app.get('/PURGATORIO/16', (req,res)=>{
	res.render('PURGATORIO/16');
});

app.get('/PURGATORIO/17', (req,res)=>{
	res.render('PURGATORIO/17');
});

app.get('/PURGATORIO/18', (req,res)=>{
	res.render('PURGATORIO/18');
});

app.get('/PURGATORIO/19', (req,res)=>{
	res.render('PURGATORIO/19');
});

app.get('/PURGATORIO/20', (req,res)=>{
	res.render('PURGATORIO/20');
});

app.get('/PURGATORIO/21', (req,res)=>{
	res.render('PURGATORIO/21');
});

app.get('/PURGATORIO/22', (req,res)=>{
	res.render('PURGATORIO/22');
});

app.get('/PURGATORIO/23', (req,res)=>{
	res.render('PURGATORIO/23');
});

app.get('/PURGATORIO/24', (req,res)=>{
	res.render('PURGATORIO/24');
});

app.get('/PURGATORIO/25', (req,res)=>{
	res.render('PURGATORIO/25');
});

app.get('/PURGATORIO/26', (req,res)=>{
	res.render('PURGATORIO/26');
});

app.get('/PURGATORIO/27', (req,res)=>{
	res.render('PURGATORIO/27');
});

app.get('/PURGATORIO/28', (req,res)=>{
	res.render('PURGATORIO/28');
});

app.get('/PURGATORIO/29', (req,res)=>{
	res.render('PURGATORIO/29');
});

app.get('/PURGATORIO/30', (req,res)=>{
	res.render('PURGATORIO/30');
});

app.get('/PURGATORIO/31', (req,res)=>{
	res.render('PURGATORIO/31');
});

app.get('/PURGATORIO/32', (req,res)=>{
	res.render('PURGATORIO/32');
});

app.get('/PURGATORIO/33', (req,res)=>{
	res.render('PURGATORIO/33');
});

app.get('/PARADISO/1', (req,res)=>{
	res.render('PARADISO/1');
});

app.get('/PARADISO/2', (req,res)=>{
	res.render('PARADISO/2');
});

app.get('/PARADISO/3', (req,res)=>{
	res.render('PARADISO/3');
});

app.get('/PARADISO/4', (req,res)=>{
	res.render('PARADISO/4');
});

app.get('/PARADISO/5', (req,res)=>{
	res.render('PARADISO/5');
});

app.get('/PARADISO/6', (req,res)=>{
	res.render('PARADISO/6');
});

app.get('/PARADISO/7', (req,res)=>{
	res.render('PARADISO/7');
});

app.get('/PARADISO/8', (req,res)=>{
	res.render('PARADISO/8');
});

app.get('/PARADISO/9', (req,res)=>{
	res.render('PARADISO/9');
});

app.get('/PARADISO/10', (req,res)=>{
	res.render('PARADISO/10');
});

app.get('/PARADISO/11', (req,res)=>{
	res.render('PARADISO/11');
});

app.get('/PARADISO/12', (req,res)=>{
	res.render('PARADISO/12');
});

app.get('/PARADISO/13', (req,res)=>{
	res.render('PARADISO/13');
});

app.get('/PARADISO/14', (req,res)=>{
	res.render('PARADISO/14');
});

app.get('/PARADISO/15', (req,res)=>{
	res.render('PARADISO/15');
});

app.get('/PARADISO/16', (req,res)=>{
	res.render('PARADISO/16');
});

app.get('/PARADISO/17', (req,res)=>{
	res.render('PARADISO/17');
});

app.get('/PARADISO/18', (req,res)=>{
	res.render('PARADISO/18');
});

app.get('/PARADISO/19', (req,res)=>{
	res.render('PARADISO/19');
});

app.get('/PARADISO/20', (req,res)=>{
	res.render('PARADISO/20');
});

app.get('/PARADISO/21', (req,res)=>{
	res.render('PARADISO/21');
});

app.get('/PARADISO/22', (req,res)=>{
	res.render('PARADISO/22');
});

app.get('/PARADISO/23', (req,res)=>{
	res.render('PARADISO/23');
});

app.get('/PARADISO/24', (req,res)=>{
	res.render('PARADISO/24');
});

app.get('/PARADISO/25', (req,res)=>{
	res.render('PARADISO/25');
});

app.get('/PARADISO/26', (req,res)=>{
	res.render('PARADISO/26');
});

app.get('/PARADISO/27', (req,res)=>{
	res.render('PARADISO/27');
});

app.get('/PARADISO/28', (req,res)=>{
	res.render('PARADISO/28');
});

app.get('/PARADISO/29', (req,res)=>{
	res.render('PARADISO/29');
});

app.get('/PARADISO/30', (req,res)=>{
	res.render('PARADISO/30');
});

app.get('/PARADISO/31', (req,res)=>{
	res.render('PARADISO/31');
});

app.get('/PARADISO/32', (req,res)=>{
	res.render('PARADISO/32');
});

app.get('/PARADISO/33', (req,res)=>{
	res.render('PARADISO/33');
});

app.listen(3000, () => {
	console.log('The web server has started on port 3000');
});

