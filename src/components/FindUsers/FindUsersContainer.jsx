import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, toggleFollowingBtnDisabling, getUsersThunk, followThunk, unFollowThunk } from '../../redux/findUsersReducer';
import FindUsers from './FindUsers';

class FindUsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            <FindUsers
                pageSize={this.props.pageSize} 
                foundUsers={this.props.foundUsers} 
                totalUsersCount={this.props.totalUsersCount} 
                follow={this.props.follow} 
                unFollow={this.props.unFollow} 
                currentPage={this.props.currentPage} 
                onPageChange={this.onPageChange} 
                isFetching={this.props.isFetching}
                toggleFollowingBtnDisabling={this.props.toggleFollowingBtnDisabling}
                followingBtnDisabling={this.props.followingBtnDisabling}
                followThunk={this.props.followThunk}
                unFollowThunk={this.props.unFollowThunk}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        foundUsers : state.findUsersPage.foundUsers,
        totalUsersCount : state.findUsersPage.totalUsersCount,
        pageSize : state.findUsersPage.pageSize, 
        currentPage : state.findUsersPage.currentPage,
        isFetching : state.findUsersPage.isFetching,
        followingBtnDisabling : state.findUsersPage.followingBtnDisabling,
    }
}

export default connect(mapStateToProps, { follow, unFollow, setCurrentPage, toggleFollowingBtnDisabling, getUsersThunk, followThunk, unFollowThunk})(FindUsersContainer);