const  DetailMovie = ({overview} : { overview : string }) => {
  return (
    <div className="lg:flex lg:gap-4 lg:mb-16 ">
      <div className="flex-1">
      <p className="text-gray-400 lg:text-lg">
          2020 10 episode
          <span className="text-[8px] ml-2 border rounded-full p-1 lg:text-base lg:py-2">16+</span>
        </p>
        <p className="font-light mt-4 text-[12px] line-clamp-3 lg:line-clamp-none lg:text-base  ">
         {overview}
        </p>
      </div>        
        <table className="mt-4 text-left text-[12px] lg:mt-0 lg:text-base flex-1">
          <tbody>
            <tr >
              <th className="align-top pr-2 font-medium text-gray-400">Cast</th>
              <td className="align-top">
                : Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed,
                dan lain-lain
              </td>
            </tr>
            <tr>
              <th className="align-top pr-2 font-medium text-gray-400">Genre</th>
              <td className="align-top">: Komedi, Drama, Olahraga</td>
            </tr>
            <tr>
              <th className="align-top pr-2 font-medium text-gray-400">Pembuat Film</th>
              <td className="align-top">
                : Brendan Hunt, Joe Killy, Bill Lawrence
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default DetailMovie