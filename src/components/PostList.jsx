import React from 'react';
import PostItem from "./PostItem";

class PostList extends React.Component {

    render() {
        const {posts} = this.props;
        return (
            <div className="my-3 p-3 rounded box-shadow">
                <h5 className="border-bottom border-gray pb-2 mb-0">List of posts:</h5>
                {
                    posts.map((post) => {
                        return <PostItem
                            title={post.title}
                            body={post.body}
                            key={post.id}
                        />
                    })
                }
            </div>
        );
    }
}

export default PostList;