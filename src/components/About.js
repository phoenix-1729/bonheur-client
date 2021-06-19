
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import {
    Container, AppBar, Grow,
     Button,
    Typography, Grid, CircularProgress, TextField, Paper
} from '@material-ui/core/';
// import memories from '../images/memories.png';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles'
import FileBase from 'react-file-base64';

import './cardStyle.css'

const About = () => {

    const classes = useStyles();
    const history = useHistory();
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });
            const data = await res.json();
            console.log(data);
            setUserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            history.push('/signin')
        }
    }

    const getMemories = async () => {
        try {
            const res1 = await fetch('/getMemories', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });
            const data1 = await res1.json();
            console.log(data1);
            setPosts(data1);
            // setUserData(data1);
            if (!res1.status === 200) {
                const error = new Error(res1.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        callAboutPage();
        getMemories();
    }, [])

    console.log(posts);
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const clear = () => {
        setUserData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    const sendPost = async (e) => {
        e.preventDefault();
        const { creator, title, message, tags, selectedFile } = userData;

        const res = await fetch("/about1", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                creator, title, message, tags, selectedFile
            })
        });

        const data = await res.json();
        if (!data) {
            window.alert("Invalid Post");
            console.log("Invalid Post");
        } else {
            window.alert("Successfull Post");
            console.log("Successfull Post");
        }
    }

    // console.log(posts);

    // constructor() {
    //     super();

    //     this.state = {
    //         posts: {}
    //     }
    // }
    // componentWillMount() {
    //     this.setState({
    //         posts: userData.memories
    //     });
    // }

    return (
        <>
            <div className="back">
                <Container >
                    <AppBar className={classes.appBar} position="static" color="inherit">
                        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
                    </AppBar>
                    <Grow in>
                        <Container>
                            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                <Grid item xs={12} sm={7}>
                                    {!posts.length ? (<CircularProgress />) : (
                                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                                            {/* for(int index=0; index<userData.length ; index++) { */}
                                            {posts.map((post) => (
                                                <Grid key={post._id} item xs={12} sm={6} md={6}>
                                                    <div class="wrapper">
                                                        <div class="card">
                                                            <img src={`${post.selectedFile}`} />
                                                            <div class="info">
                                                                <h1>{post.title}</h1>
                                                                <p>{post.message}</p>
                                                                <button>Read More</button>
                                                                <h4>{moment(post.createdAt).fromNow()}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div class="wrapper">
                                                    <div class="card"  >
                                                        <div class="front">
                                                            <h1>{post.title}</h1>
                                                            <p>{moment(post.createdAt).fromNow()}</p>
                                                            <p class="price"> - {post.creator}</p>
                                                        </div>
                                                        <div class="right">
                                                            <h2>Signature</h2>
                                                            <ul>
                                                                <li>Width	7.7"</li>
                                                                <li>Length	31.75"</li>
                                                                <li>Wheelbase	14"</li>
                                                                <li>Nose	6.875"</li>
                                                                <li>Tail	6.25"</li>
                                                            </ul>
                                                            <button className="botton1">Add to cart, yo</button>
                                                        </div>
                                                    </div>
                                                    <div class="img1-wrapper"> */}
                                                    {/* <CardMedia className="img1" image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} /> */}
                                                    {/* <img class="img1" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt='' />
                                                    </div>
                                               </div> */}
                                                    {/* }) */}
                                                    {/* <Card className={classes.card}>
                                                <div className={classes.overlay}>
                                                    <Typography variant="h6">{post.creator}</Typography>
                                                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                                                </div>
                                                <div className={classes.overlay2}>
                                                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
                                                </div>
                                                <div className={classes.details}>
                                                    <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                                                </div>
                                                <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                                                <CardContent>
              02222222222222                                       <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                                                </CardContent>
                                                <CardActions className={classes.cardActions}>
                                                    <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
                                                    <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
                                                </CardActions>
                                            </Card> */}
                                                </Grid>
                                            ))}
                                        </Grid>
                                    )}
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Paper className={classes.paper}>
                                        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={sendPost}>
                                            {/* <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}
                                            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={userData.creator}
                                                onChange={handleInputs} />
                                            <TextField name="title" variant="outlined" label="Title" fullWidth value={userData.title}
                                                onChange={handleInputs} />
                                            <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={userData.message}
                                                onChange={handleInputs} />
                                            <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={userData.tags}
                                                onChange={(e) => setUserData({ ...userData, tags: e.target.value.split(',') })} />
                                            <div className={classes.fileInput}>
                                                <FileBase type="file" multiple={false} onDone={({ base64 }) => setUserData({ ...userData, selectedFile: base64 })} />
                                            </div>
                                            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                                            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                                        </form>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grow>
                </Container>
            </div>
            {/* <h1>Hello from About</h1> */}
        </>
    )
}




export default About
