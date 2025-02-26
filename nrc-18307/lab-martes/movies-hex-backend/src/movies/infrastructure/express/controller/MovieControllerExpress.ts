import { Request, Response } from 'express'
import MovieControllerExpressInterface from '../../../domain/interfaces/MovieControllerExpressInterface'
import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'
import MoviesToJson from './MoviesToJson'

export default class MovieControllerExpress
  implements MovieControllerExpressInterface
{
  constructor(private readonly movieUseCase: MovieUseCasePort) {}

  getMovies(_req: Request, res: Response): void {
    console.log("I got this way")
    const movies = this.movieUseCase.getMovies()
    const movies_json = MoviesToJson.get(movies)

    if (movies_json.length === 0) {
      res.status(404).send('Movies not found')
      return
    }

    res.status(200).json(movies_json)
  }
  getMovieById(_req: Request, _res: Response): void {
    throw new Error('Method not implemented.')
  }
}
