var CardComponent = React.createClass({
        componentWillMount : function() {
          profile.on("change", (function() {
            this.forceUpdate();
          }.bind(this)));
        },
        componentWillUnmount : function() {
          profile.off("change");
        },
        render : function() {
          return (
            <div className="card">
              <div className="picture">
                <img src={this.props.profile.get("picture")} />
              </div>
              <div className="name">
                {this.props.profile.get("name")}
                <small>
                  ({this.props.profile.get("gender")})
                </small>
              </div>
            </div>
          );
        }
      });
