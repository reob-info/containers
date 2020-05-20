/*
   CONTAINERS:
   EASILY CREATE MOBILE OR DESKTOP WEB UIs.
   DEVELOPED BY REOB
   BRAZIL - BAHIA - SALVADOR

   CONTACT US:
   EMAIL: contact.reob@gmail.com
   PLEASE WRITE THE EMAIL AT ENGLISH OR PORTUGUESE ONLY.

   CONTAINERS IS FREE TO USE FOR PERSONAL OR COMMERCIAL SITES,
   BUT YOU SHOULD RETAIN THESE COMMENTS IN THE FILE SERVED.
   IF YOU PREFER TO SERVE THIS FILE WITHOUT THESE COMMENTS, PLEASE CONTACT US BY EMAIL TO BUY A LICENCE.

   REOB CAN NOT BE CHARGED BY ANY DAMAGE OR PREJUDICE, DERIVED OR NOT, OF THE USE OF THIS SOFTWARE.
   IF YOU DECIDED TO USE IT, TAKE ALL THE RISK FOR YOURSELF.

   =========================================
   - COMPONENTS IN THIS FILE:
     - CSS + JS:
       - REOB-MULTISELECT
       - REOB-UNISELECT
       - REOB-PROGRESS-BAR
     - JS ONLY:
       - REOB-AJAX-REQUEST
   =========================================

*/

// REOB-MULTISELECT

class ReobMultiSelect {
	static addTag ( comp ) {
		var s = comp.parentElement;
		while ( !( ( s.tagName == "DIV" ) && ( s.className == "reob-multiselect" ) ) ) {
			s = s.parentElement;
		}
		var t = '<option onclick="ReobMultiSelect.removeTag(this)" value="' + comp.value + '">' + comp.innerText + '</option>';
		if ( !s.children[ 0 ].innerHTML.includes( t ) ) {
			s.children[ 0 ].innerHTML += t;
		}
		s.children[ 2 ].name = s.id;
		s.children[ 2 ].value = MultiSelect.getValues( s.id );
		if ( s.onchange ) s.onchange();
	}

	static removeTag ( comp ) {
		var t = '<option onclick="ReobMultiSelect.removeTag(this)" value="' + comp.value + '">' + comp.innerText + '</option>';
		var s = comp.parentElement;
		s.innerHTML = s.innerHTML.replace( t, '' );
		s.children[ 2 ].name = s.id;
		s.children[ 2 ].value = MultiSelect.getValues( s.id );
		if ( s.onchange ) s.onchange();
	}

	static getValues ( id ) {
		var c = document.getElementById( id );
		var l = [];
		var o = c.children[ 0 ].children;
		for ( var i = 0; i < o.length; i++ ) {
			l.push( o[ i ].value );
		}
		return JSON.stringify( l );
	}

	static selectOption ( id, value ) {
		var c = document.getElementById( id );
		var o = c.children[ 1 ].children;
		for ( var i = 0; i < o.length; i++ ) {
			if ( o[ i ].tagName == "OPTGROUP" ) {
				for ( var j = 0; j < o[ i ].children.length; j++ ) {
					if ( ( o[ i ].children[ j ].tagName == "OPTION" ) && ( o[ i ].children[ j ].value == value ) ) {
						MultiSelect.addTag( o[ i ].children[ j ] );
					}
				}
			} else {
				if ( ( o[ i ].tagName == "OPTION" ) && ( o[ i ].value == value ) ) {
					MultiSelect.addTag( o[ i ] );
				}
			}
		}
	}
}

// REOB-UNISELECT

class ReobUniSelect {
	static addTag ( comp ) {
		var s = comp.parentElement;
		while ( !( ( s.tagName == "DIV" ) && ( s.className == "reob-uniselect" ) ) ) {
			s = s.parentElement;
		}
		var t = '<option onclick="ReobUniSelect.removeTag(this)" value="' + comp.value + '">' + comp.innerText + '</option>';
		s.children[ 0 ].innerHTML = t;
		s.children[ 2 ].name = s.id;
		s.children[ 2 ].value = UniSelect.getValue( s.id );
		if ( s.onchange ) s.onchange();
	}

	static removeTag ( comp ) {
		var t = '<option onclick="ReobUniSelect.removeTag(this)" value="' + comp.value + '">' + comp.innerText + '</option>';
		var s = comp.parentElement;
		s.innerHTML = s.innerHTML.replace( t, '' );
		s.children[ 2 ].name = s.id;
		s.children[ 2 ].value = UniSelect.getValue( s.id );
		if ( s.onchange ) s.onchange();
	}

	static getValue ( id ) {
		var c = document.getElementById( id );
		var o = c.children[ 0 ].children;
		var v = o[ 0 ].value;
		return v;
	}

	static selectOption ( id, value ) {
		var c = document.getElementById( id );
		var o = c.children[ 1 ].children;
		for ( var i = 0; i < o.length; i++ ) {
			if ( o[ i ].tagName == "OPTGROUP" ) {
				for ( var j = 0; j < o[ i ].children.length; j++ ) {
					if ( ( o[ i ].children[ j ].tagName == "OPTION" ) && ( o[ i ].children[ j ].value == value ) ) {
						UniSelect.addTag( o[ i ].children[ j ] );
					}
				}
			} else {
				if ( ( o[ i ].tagName == "OPTION" ) && ( o[ i ].value == value ) ) {
					UniSelect.addTag( o[ i ] );
				}
			}
		}
	}
}

// REOB-PROGRESS-BAR

class ReobProgressBar {
	static update ( id, value, text = "", include_value = true ) {
		var comp = document.getElementById( id );
		value = value.toFixed( 1 ) + "%";
		if ( !( text ) ) {
			text = "Total: " + value;
		} else {
			if ( include_value ) {
				text += ( " " + value );
			}
		}
		comp.children[ 0 ].style.width = value;
		comp.children[ 1 ].textContent = text;
	}
}

// REOB-AJAX-REQUEST

class ReobAjaxRequest {
	constructor( function_ok, function_error = null ) {
		this.function_ok = function_ok;
		this.function_error = function_error;
		this.xhttp = new XMLHttpRequest();
		this.xhttp.withCredentials = true;
	}

	doRequest ( method, url, header = null, data = null ) {
		var f_ok = this.function_ok;
		var f_err = this.function_error;

		this.xhttp.onreadystatechange = function () {
			if ( this.readyState == 4 ) {
				if ( this.status == 200 ) {
					f_ok( this.responseText );
				} else {
					if ( f_err ) {
						if ( this.responseText ) {
							f_err( this.responseText );
						}
					}
				}
			}
		}

		switch ( method ) {
			case 'GET':
				this.xhttp.open( method, url );
				this.xhttp.send();
				break;
			case 'POST':
				this.xhttp.open( method, url );
				if ( header ) {
					this.xhttp.setRequestHeader( header[ 0 ], header[ 1 ] );
				}
				this.xhttp.send( data );
				break;
		}
	}
}
