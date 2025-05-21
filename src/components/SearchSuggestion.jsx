function SearchSuggestion({info}){
    console.log(info)
    const {snippet} = info;
    return <div className="flex w-full hover:bg-gray-100 items-center py-1">
        <i className="fa-solid fa-magnifying-glass mx-2"></i>
        <p>{snippet.title}</p>
    </div>
}

export default SearchSuggestion;