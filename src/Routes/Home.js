import React, { Component } from 'react'
import axios  from 'axios';
import Movie from '../Components/Movie';
import './Home.css';

class Home extends Component {
    state = {
        isLoding: true,
        movies:[],
      }
      getMovies = async () =>{
        const {
        data:{
          data:{movies},
        },
      } = await axios.get('https://yts.mx/api/v2/list_movies.json?genre=animation&sort_by=like_count');
      this.setState({isLoding:false,movies});
      }
      componentDidMount(){
        // setTimeout(()=>{
        //   this.setState({isLoding: false})
        // },3000)
        this.getMovies();
      }
      render() {
        const {isLoding, movies} = this.state;
        return (
          <section className='container'>
            {isLoding ? 
            <div className='loader'>
              <span className='loader_text'>
                Loding...
              </span>
            </div>
             :  
             <div className='movies'>
              {movies.map((movie)=><Movie key={movie.id} genres={movie.genres} img={movie.medium_cover_image} title={movie.title} summary={movie.summary} year={movie.year} />)}
            </div>
            }
        </section>
        )
      }
}

export default Home;