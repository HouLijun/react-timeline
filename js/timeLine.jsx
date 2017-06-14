class History extends React.Component{
    render(){
        return(
            <div className={this.props.isActive?"introduce active":"introduce"}>
                <div className="logo">
                    <img src="images/Legacy_old_logo.png" alt="Radio Logo"/>
                </div>
                <h1 className="header">传奇时间线</h1>
                <h3 className="title">B&O 耳机的历史</h3>
                <p className="text">回到1978年，B&O向世界介绍了他们的第一款耳机U70。从那时开始，B&O 一直致力于耳机技术的改进，并不断发展，到今天为止，已将近40年。迄今为止，B&O是这个世界上可以声称他们在这一领域颇有建树少数几家耳机厂商之一。
                </p>
                <p className="text">让我们一起回到历史的旅程，体验B&O耳机从最早推出到最近新推出的两款新耳机，重现经典。</p>
            </div>
        )
    }
}
class Item extends React.Component{
    render(){
        return(
            <div className={this.props.isActive?"item active":"item"} style={{left:`${this.props.index*645}px`}}>
                <div className="picture">
                    <img src={`images/${this.props.data.img}`}/>
                </div>
                <div className="information">
                    <h2 className="header">{this.props.data.header}</h2>
                    <p><span>生产于 <b> {this.props.data.time}</b></span></p>
                    <p><span>设计师 <b> {this.props.data.author}</b></span></p>
                    <div className="text">
                        <p>U70 耳机的重量在它所处的年代是非常轻便的( 仅重300克)，甚至当时，它的佩戴舒适度、独特的风格以及高质量的聆听体验也是少有的。</p>
                        <p>它的耳罩可以横向和纵向调整，并可锁定就位。你也可以使用内部头带调整它的高度。U70 后来为 Form 1 所替代。</p>
                    </div>
                    <div className="btn">
                        <img width="185" height="42" src="images/Legacy_btn_rotate.png" className="BLItemBtnImg"/>
                    </div>
                    <div className="year">
                        <i className="point">•</i>
                        <span>{this.props.data.year}</span>
                    </div>
                </div>
            </div>
        )
    }
}
class HistoryBtn extends React.Component{
    render(){
        return(
            <li className={(this.props.isActive)?"active":""} onClick={()=>{this.props.click(0)}}>
                <img className="btnImg" src="images/Legacy_btn_1_w.png"/>
                <img className="btnImg hover" src="images/Legacy_btn_1_b.png"/>
            </li>
        )
    }
}
class Btn extends React.Component{
    render(){
        var img=<img className="btnImg" src={`images/${this.props.data.img}`}/>
        return(
            <li className={this.props.isActive ? "active" : ""} onClick={()=>{this.props.click(this.props.index)}}>
                <img className="btnImg" src="images/Legacy_btn_bg_w.png"/>
                <img className="btnImg hover" src="images/Legacy_btn_bg_b.png"/>
                {img}
            </li>
        )
    }
}
class TimeLine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
        this.prev=this.prev.bind(this);
        this.next=this.next.bind(this);
        this.click=this.click.bind(this);
    }
    prev(){
        this.setState(function (ps) {
            return {index:(ps.index-1<0?0:(ps.index-1))}
        })
    }
    next(){
        var len=this.props.btns.length;
        this.setState((ps)=>({index:(ps.index+1>len)?len:(ps.index+1) }))
    }
    click(i){
        this.setState(()=>({index:i}));
    }
    render(){
        const items=this.props.items.map((v,i)=><Item key={i} index={i+1} isActive={i+1==this.state.index} data={v} />)
        const btns=this.props.btns.map((v,i)=><Btn key={i} index={i+1} isActive={i+1==this.state.index } data={v} click={this.click}/>);
        return (
            <div className="product">
                <dl className="show" style={{transform:`translate3d(${-645*this.state.index}px,0,0)`}}>
                    <dd className="content">
                        <History isActive={this.state.index==0}/>
                        {items}
                    </dd>
                    <dt className="timeLine"></dt>
                </dl>
                <ul className="indicators">
                    <HistoryBtn isActive={this.state.index==0} click={this.click}/>
                    {btns}
                </ul>
                <div className="slide" onClick={this.prev}></div>
                <div className="slide" onClick={this.next}></div>
            </div>
        )
    }
}
const showList=[
    {img:"Legacy_h_U70.png",header:"U70",time:"1978-1984",author:"Jacob Jensen",text:"",year:1978},
    {img:"Legacy_h_Form1.png",header:"FORM 1",time:"1985-1997",author:"Jacob Jensen",text:"",year:1985},
    {img:"Legacy_h_Form2.png",header:"FORM 2",time:"1978-1984",author:"Jacob Jensen",text:"",year:1985},
    {img:"Legacy_h_3i.png",header:"EARSET 3I",time:"1978-1984",author:"Jacob Jensen",text:"",year:2000},
    {img:"Legacy_h_H3.png",header:"H3",time:"1978-1984",author:"Jacob Jensen",text:"",year:2013},
    {img:"Legacy_h_H6.png",header:"H6",time:"1978-1984",author:"Jacob Jensen",text:"",year:2013},
    {img:"Legacy_h_Form2i.png",header:"FORM 2I",time:"1978-1984",author:"Jacob Jensen",text:"",year:2014},
    {img:"H2_Legacy_side.png",header:"H2",time:"1978-1984",author:"Jacob Jensen",text:"",year:2015},
    {img:"H8_Legacy_side.png",header:"H8",time:"1978-1984",author:"Jacob Jensen",text:"",year:2015},
    {img:"Legacy_h_H3ANC_f_large.png",header:"H3 ANC",time:"1978-1984",author:"Jacob Jensen",text:"",year:2016},
    {img:"H7_Legacy_side.png",header:"H7",time:"1978-1984",author:"Jacob Jensen",text:"",year:2016}
];
const indicators=[
    {img:"Legacy_btn_2.png"},
    {img:"Legacy_btn_3.png"},
    {img:"Legacy_btn_4.png"},
    {img:"Legacy_btn_5.png"},
    {img:"Legacy_btn_6.png"},
    {img:"Legacy_btn_7.png"},
    {img:"Legacy_btn_8.png"},
    {img:"H2_Legacy_thumb.png"},
    {img:"H8_Legacy_thumb.png"},
    {img:"Legacy_h_H3ANC_thumb.png"},
    {img:"H7_Legacy_thumb.png"}
]
ReactDOM.render(<TimeLine btns={indicators} items={showList}/>,document.getElementsByClassName("container")[0]);