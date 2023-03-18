import { useState } from "react";
import { Button } from "react-bootstrap"
import '../App.css';
import Result from "./Result";
import affection from '../Images/affection.jpg'
import friends from '../Images/friends.jpg'
import lover from '../Images/lover.jpg'
import marriage from '../Images/marriage.jpg'
import enemies from '../Images/enemies.jpg'
import siblings from '../Images/siblings.jpg'

const Flames = ({ date, display, reset, data2, gender }) => {

    const [modalShow, setModalshow] = useState(false)

    const name11 = date.name1
    const name22 = date.name2

    let o = name11
    let p = name22

    let c = o + p
    let d = p + o

    for (let i = 0; i < o.length; i++) {
        c = c.split(o[i]).join("")
        for (let j = 0; j < p.length; j++) {
            d = d.split(p[j]).join("")
        }
    }

    const joint = c + d

    let a = "FLAMES"
    let b = joint.length
    let f, x, y, m, q



    for (let i = 0; i < 5; i++) {
        f = a
        //console.log(f)
        x = Math.floor(b / f.length) + 1
        //console.log(x)  // howmany time to be repeated 
        a = a.repeat(x)
        //console.log(a)  //repeated string
        y = a[b - 1]
        // console.log(y)  //letter to be eliminated
        a = f.replace(y, "")
        //console.log(a)  //string after a letter removal
        m = f.indexOf(y)
        //console.log(m)  //position of deleted string
        p = f.slice(0, m)
        //console.log(p) 
        q = a.slice(m, 5)
        //console.log(q)
        a = q.concat(p)
        //console.log(a)  //rearranged string
        //console.log('---------------------------------------------------')
    }

    let image, gen1, gen2, gen3,quote

    if (gender === "Male") {
        gen1 = "her"
        gen2 = "She"
        gen3="sister"
    } else {
        gen1 = "him"
        gen2 = "He"
        gen3="brother"
    }


    if (a === "F") {
        a = "Friends"
        image = friends
        quote = `Be Friend With ${gen1}.${gen2} will make your life fun and happy.Whoever leaves,A true friend never leave`
    } else if (a === "L") {
        a = "Lover"
        image = lover
        quote=`Go propose ${gen1}...Have fun.${gen2} is the one who makes you beatiful`
    } else if (a === "A") {
        a = "Affection"
        image = affection
        quote=`Now ${gen2} is your crush,${gen2} is the one who make yourself happier by thinking about ${gen1}.`
    } else if (a === "M") {
        a = "Marriage"
        image = marriage
        quote=`Go marry ${gen1}. Have ten kids and fulfill your life.....`
    } else if (a === "E") {
        a = "Enemies"
        image = enemies
        quote=`Be proud to have ${gen1} as your enemy. Because this is what motivates than any other in the world.Prove yourself who you are and what you deserve`
    } else {
        a = "Siblings"
        image = siblings
        quote=`care ${gen1} as a little ${gen3}.protect ${gen1}.`
    }

    const two = () => {
        display(a);
        if (name11 !== "" && name22 !== "") {
            setModalshow(true)
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <Button onClick={two} type="submit" className="w-50 m-2 fw-bold">Check</Button>
            <Button onClick={() => { reset() }} type="reset" className="w-50 m-2 fw-bold">Reset</Button>
            <Result data3={data2} quote={quote} image={image} show={modalShow} onHide={() => { setModalshow(false) }} />
        </div>
    )
}
export default Flames