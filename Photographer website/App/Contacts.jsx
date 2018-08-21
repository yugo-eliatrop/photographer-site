﻿import React, { Component } from 'react';

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-offset-1 col-sm-5">
                    <h1 className="h1">Contacts</h1>
                    <p className="first-p">{this.props.holder.address}</p>
                    <div className="links">
                        <div className="col-xs-2">
                            <p><i className="fas fa-mobile-alt"></i></p>
                            <p><i className="fab fa-vk"></i></p>
                            <p><i className="fab fa-instagram"></i></p>
                            <p><i className="fab fa-viber"></i></p>
                        </div>
                        <div className="col-xs-10">
                            <p>{this.props.holder.phone}</p>
                            <p><a href={this.props.holder.vk}>vk.com</a></p>
                            <p><a href={this.props.holder.instagram}>instagram.com</a></p>
                            <p>{this.props.holder.phone}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <h1 className="h1">Write me</h1>
                    <form action="">
                        <input type="text" name="phone" placeholder="Your phone" />
                        <input type="text" name="name" placeholder="Your name" />
                        <textarea name="text" placeholder="Your message"></textarea>
                        <button className="button" type="submit">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}