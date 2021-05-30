import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, togglePreloader, followingDisable } from '../../redux/findUsersReducer';
import FindUsers from './FindUsers';

class FindUsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/' + `users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.togglePreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/' + `users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.togglePreloader(false);
            this.props.setUsers(response.data.items);
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
                followingDisable={this.props.followingDisable}
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
        followingDisable : state.findUsersPage.followingDisable,
    }
}

export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, togglePreloader, followingDisable })(FindUsersContainer);