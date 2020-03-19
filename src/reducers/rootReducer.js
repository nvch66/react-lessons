const initState={
    posts: [
        {
            "userId": 8,
            "id": 74,
            "title": "enim unde ratione doloribus quas enim ut sit sapiente",
            "body": "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
          },
          {
            "userId": 8,
            "id": 75,
            "title": "dignissimos eum dolor ut enim et delectus in",
            "body": "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
          },
          {
            "userId": 8,
            "id": 76,
            "title": "doloremque officiis ad et non perferendis",
            "body": "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
          },
          {
            "userId": 8,
            "id": 77,
            "title": "necessitatibus quasi exercitationem odio",
            "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
          },
          {
            "userId": 8,
            "id": 78,
            "title": "quam voluptatibus rerum veritatis",
            "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
          },
          {
            "userId": 8,
            "id": 79,
            "title": "pariatur consequatur quia magnam autem omnis non amet",
            "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
          },
          {
            "userId": 8,
            "id": 80,
            "title": "labore in ex et explicabo corporis aut quas",
            "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
          },
          {
            "userId": 9,
            "id": 81,
            "title": "tempora rem veritatis voluptas quo dolores vero",
            "body": "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
          },
          {
            "userId": 9,
            "id": 82,
            "title": "laudantium voluptate suscipit sunt enim enim",
            "body": "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic"
          },
          {
            "userId": 9,
            "id": 83,
            "title": "odit et voluptates doloribus alias odio et",
            "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
          },
          {
            "userId": 9,
            "id": 84,
            "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
            "body": "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio"
          },
          {
            "userId": 9,
            "id": 85,
            "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
            "body": "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
          },
          {
            "userId": 9,
            "id": 86,
            "title": "placeat quia et porro iste",
            "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio"
          },
    ] 
}


const rootReducer = (state=initState,action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post =>post.id!==action.id);
      return {
          ...state,
          posts:newPosts
      }  
    }
    return state
}

export default rootReducer;