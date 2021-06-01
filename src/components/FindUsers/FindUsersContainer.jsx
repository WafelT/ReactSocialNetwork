import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, togglePreloader, toggleFollowingBtnDisabling } from '../../redux/findUsersReducer';
import FindUsers from './FindUsers';

class FindUsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.togglePreloader(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.togglePreloader(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setUsers([]);
        this.props.togglePreloader(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.togglePreloader(false);
            this.props.setUsers(data.items);
        });
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

export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, togglePreloader, toggleFollowingBtnDisabling })(FindUsersContainer);