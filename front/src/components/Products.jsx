import React from 'react'
import {Link} from 'react-router-dom'

<<<<<<< HEAD
export default ({productList})=>(
  <div className='row'>
  
      { productList.map((product)=>(
 
<div key={product.id} className='col-sm-3' >
<div className="card border-top"   style={{width: "18rem"}} >
  <img className="card-img-top" src="" />
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <h2 className="card-title">{product.price}$</h2>
    <p className="card-text">{product.description}</p>
    <p className="card-text">stock:{product.stock} </p>
    <div className="btn-group" role="group" aria-label="Basic example">
    <Link to="/products/single" className="btn btn-primary">ver Producto</Link>
    <Link to='/products/edit'><button type="button" className="btn btn-dark">EDIT</button></Link>
    <button type="button" className="btn btn-danger">DELETE</button>

    </div>
    
  </div>
</div>
</div>


))}
</div>


   
 

    )






=======
export default ()=>(
	<div className='container-fluid'>
		<div className='row'>
			<div className='col-sm-3'>
				<div className="card"   style={{width: "18rem"}}>
					<img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to="/products/single" className="btn btn-primary">ver Producto</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-3'>
				<div className="card"   style={{width: "18rem"}}>
					<img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to="/products/single" className="btn btn-primary">ver Producto</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-3'>
				<div className="card"   style={{width: "18rem"}}>
					<img className="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREBUSEhIVFRUVFRUVFRcVFRUVFRcWFRUWFxUVFRUYHSggGB0lHhUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg8NDysZFRkrKysrKzcrLS0tKy0tNys3Ky0tLTcrKysrKysrKysrKzcrKys3KysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMEBQEGBwj/xABMEAACAQICBgUHBwgIBgMAAAABAgADEQQhBRIxQVFhBgcTInEyQnKBkaGxFFJiksHR4SMzU3OCk6LwFSRDY4Oy0tMIdJSzwvEWNVT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AO4whCATCteIZopNkBUIQgEIQgEIRJMBUIi3OYq11VdZ2CgbSxAHtMByEoa/TXRqNqtj8KCNo7emSPGxyk2jpzDuuslVXU7Ct2HtECxhIQ0rR+f/AAt90cTH0j56+s2+MCTCJVwdhB8M4qATCtcXiGa8WuyBmEIQCEIQCEIkmAqEQIoGBmEIQCNs0WwyiVWAKsXCEAhCEAhCU/SLpHRwVF6tQ5ILkDjsC+JJAA4kQLWtVVFLOwVVFyzEAADaSTsE570j628FhhbDhsU1zY0yFogjcap2/sgzkPTHphitJVL1mK0gb06Km1Nc8iR57fSPqtKKk9r7wdo4/cecLHRtK9ZWOxC9p2nyelmAlIAO/C7m7C30SJz3SWMfEPr1WaoRsNR2qMB6TkknnE1apa24AWUbgIgLARaSdHaQq4Z+0o1GpsNpU2B9IHJhyIIkrQeg6+Nq9lh6esR5THJEB31H3eGZO4Gdg6K9XmGwlqlS1euM9dh3EP8Ad0zkPSNzzGyArohprEYrDh6+FqU2yGsAFSoPnojNrD2EZixO67OITfrL6SOo+sRb3yy1JjUmVQqLg95GB5qb+8SXR0hVXzrjg2fv2xmvg0bMqL8bWb1MMxG3wzDNX9TjWHqNw3tJhF1htLofLBXntH3iWaOCLggjiM5prVdX84ur9IHWT1ta48WAHOScPXZO8jbc8swfvlpG1wldgdKq/dbut7j4H7JYyoIQhAIhYuYIgJigIATMAhCEAhCEAhCEAhCUeldIaxNNDlsY8eQ5fz4gvSOlb9ymfFv9P3zjfW/pTv0cLrDZ2zLfNmJK078snPrE6U7m+oltYi+exR85vfYb7bgCRIw2EVcwLsdrGxZjxJ+zYN1hMq85UtG4h81w9d+a0KrD1aqySnR3GnZg8T68PVHxWej1EcVZaPNjaAxg24PFf9NWPwWX/Q3oHXxrlqoehRRtVyy6tVmtcoiMMsiLswtnkDu7uFkCinZ4t13V0FUfrKWrTqEnmhw9vQMDOidE0cLSFGhTCIu4bzvZic2J3k5yZqR8LM6sCPqQ1JI1ZgrAjFYgpJRWIKwIpSQ6mDtnTOodvFCfpL9osecsysbZZByPF9ZWIp1XpVMJTD03ZGXtH2qbGxtnxGWYIM2jon1u4dyKWKVqF8g7HXpjkXABA5kC3Gan1xaF7OvTxaiwrDs6n6xBdD4lAR/hTnpF/H4yj2AjhgCCCCAQQbgg7CDvip5/6rusE4Flw2JYnCsbIxz7Anf+rO8bto337+rAi4NwcwRslRmEIQCEIQCEIQCEIQCEIziq4poWO73ncIEHTON1R2anvHaeA+8ygqPawXNm8kHZltY/RFxfxA2kRytW8qo54k/gPsmcHRObt5TWuPmgeSnqub8yd1plTuFoBRbaSbsTtY7yf53AbpKVZhFjyrAFWOKsyqxwLKEhZA04NREr/oKiu24dmb06xPII7N4oJaBYVaKupRhdWBVhxDCxHsMA1Yash6BdmoKHJL0y1FydpakxQv8AtaobwYSxtAa1ZgrHrTBWAyViCsfIiSIEdljbLJJWNssDV+nmiPlWj69MC7he0p+nT7ygeNiv7U89rawPHMffPU7LPNnSjR3ybG4ihuSq2ryR7VKY9SOo9UYKts/H4zr/AFK9NSbaNxDbAfkrHgBc0D4C5XkCNwvx8xVKqysroxV0YMrDaGU3VhzBAMo9gQmu9Auky6SwSV8hUHcrKPNqqBrW5G4YcmE2KEEIQgEIQgEIRLGAqUWncRdwg2LmfE/h8ZcVGCgk3FgT7Jo2ndOUcKjV8RUCgkkDzmO3VRdpPw8JNXEsLr1Leali3N9qj1DveJSWKLIuBpWQXzJ7zHizZm3LPLlaTUEiloI8oiUEeUSoyojgEFEWBAAJlM5gxnSOPp4ag9eswSnTUsx25cABmSTYADMkgSoi4f8AJ4yom6ui1l4mpTC0q38Pyb+KWlp5o6Y9I6mksV29QaqrlQpk37JL3B4a5yLMOQ2KIrRXTHSGGt2WLq6oPk1G7ZfC1XWKj0SIHpW0xace0P1yVlsMVhkqDe9Amm37tyQfrCb1oXrD0biiFGIFJzYalcdkbnYAzdxjyVjA2YiJIjsbMBsiNsJnE1VpozuwRVF2LEBQOJJylWRVxXz6NAj6SYiqD7GoLbwqG/mWzikYrHs7tSw4DOuTu1+xpHgxHlvv7NTfZrFbgnV+lXV5SxYNQVXXE2zqsdZXtsD0xYADdqWtz37zRw6U0CU1VEUWVVAVQBuAGyJcQPMum9DV8HV7LEUyjZlTtRwPOpt5w2cxcXAlcZ6Y01omjiqRpV6YdDnY7QdzKwzVhxE4f006F1dHtrgmphybLUt3kJ2LVAyB4MMjyOUC66kdNmjpE4cnuYlCLf3tMF0I/Z7QezhPQM8v9XNBm0nQK+Z2jnkBSdR72X2z01ha2vTVuIz8d/vlNPEzCm4iC14tRlCMwhCARIipgiBQ9NdNU8Hg6larsFgFG12OxB4nL2zzVp3S9XG1Wq1jcm4VR5KKfNUcPjOnf8QWOOthMODl+VrMOY1UQ+w1JyNRC49EdEMZ2+Bw1U7Wopreko1XH1gZfIJzvqZ0hr4SpQO2jVJA+hW74P1xV9k6MgkDqCOqI2gjywFiF4Wi0WVGUWcF6z+mXy+v2NFr4Wi3dI2VqgyNW+9RsX1tncW3Drg6X9jT+QUGtVqreuw206TX7gO5nz5hb7NZTOMqN0AhMwlViBEzCBZ6E6RYvBkfJsRUpqPMuGpHl2T3UeIAPOdI0B1ssxp08ThtZqhREegwANRyFCvTqHud4gXDHbe05GRJOjq+pVpncKlNjfZ3XBB8RaB6UpaOLutbEENUXNEUnsqR4qDbXcbO0YX22CgkGeRHWEbaRDLCNOI+0aeRUZxImKoK6sjqGVgVZWAKsDkQQdok1xI9QSDSejnRCngcXXqISVdFFIHMopYmomsfKF1p2O21r32noGgqt0K/NP8Am/EGUmKFqiHiHX1nVb4IZaaBqflSOK+8EfeYF6qxUITSCEIQCEIQPP3XvVvpVV3LhaQ9Zq1yfsnPRN767v8A7dv+Xo/GpNFEK3Lqt0r2GkVUmy4hTRbhreVTY87gr/iTu6Ty3hw+unZX7TXTs7be01h2duetqz0pTXF/Ow99/cqf65BbJHllSqYv5+H/AHdX/cjipjP0mG/dVf8AdgWyyp6W9IE0fhHxD2JHdppe3aVWvqJ4ZEk7gCd0cFPGfpcN+5q/705T100cYK2HauyNQ1WWmaasiire7h1Zm7xULY32K2zO9Rz7GYp61R6tVtapUYu7Hex2+A3AbgAN0ahCVS9vj8fxiYRW3x+MBMyMv595ha33ffMGAGNYhiEYjaFJHiBHIzi/zb+i3wMD1w0baONG2kQ20ZePNGnkUw8jvJDyO8CvxvlU/TPvp1B9okvRBtXXnrD+EyJj/M/WL8DJWi/z6eJ/ymQbPCEJpBCEIBCEIHn/AK96JGlUbc2FpZ8xVrA/Z7ZzwTsf/EFo0lcLiQMlNSi/7eq6E/UcesTjghW5dVWi+30irkd3Dqap4a57lMH1lm/w53dJznqZwGpg6lc7a1UgHfqUe4B9c1fbOioZBISOrGEMeUwHlld0l0HTx2FqYarkHHdYbUdc0deYNst4uNhlgpiwZUeV9I4Gph61ShWXVqUm1XA2XyIKnepBDA7wRI4nb+tvogcVR+V0FvXor31AuatEZkADay5kcbsN4tw8G+YlUqZtb+feYDL+ffMXgK2+Px/GJhM3v4/H8YCY3XQsrKNpBA9YtHI/gE1q1JfnVaS/WqKv2wPVbRsxbmNMZEIaNNHGMacyKZeMVI85keoZBAxp71P0z/26kmaHF668tY/wmQsSb1UHBXb191R7maWfR9L1GPBfiR9xgbBCEJpBCEIBCEIFJ0y0SmLwdSjUF1IBy2gjYw5jb6p5n07oargqxpVhbIlWAOq6jzlPsuN18+fq2p3gRuItNK0zoiliFehiKYdbkWO7drKdqnmOMi4x0OwnY4DDUyLEUULAfOYaz/xMZfIZW6PqXQA7V7rAcVyyHAixHIiT0MglIY8pkZDHlMofUxwGMKYsGA+DOHda3Q75JWOLoL/V6zd9QMqNZj7kc3twY23qJ2wCIxeGStTelVQOjqVdWzBUixBlR5WhNk6Y9D62AxXYqr1adS7UGVWdmUEXRgoJ11uAeNwd5AXovq90niLEYY0lPnYhhSHrTOoPqSq1iJdgBckAcTkJ13RPU0uRxWKY7DqUFCjmDUe5I8FUzedB9DsBgyGoYZA42VHvUq+qo92HgCBIjhehehmkMZY0sMyqf7StejT8bsNZxzVWnROj3VHTpFamJxDvUUhkFEBER1IZGuwYuVIBF7A2zUzphMSzQKtNIvSYJirC5CpXUWpuTkFcf2Tk5WJ1WJFjc6osNb1RFdQwKsAVYEFSAQQciCDkQeEqTSq4bOmGq0b50r3q0h/csfLUfozmBfVOQSRVqxjLmIw2MSqgemwZTcXHFTZlI2hgQQQcwQQYOYDbmQNJY2nQptVquERBdmbYPvO4DabxjpH0goYKl2ld7XuEUZu5+ai7/HYN5E4d0t6U1tIVLv3KSm9OkDdV3azHzntv3XsLZ3DoXRTpmMdja6amonZqaIPlFUYhy+4E9opsNgG+dP6P0rUy3zj7h+N55x6u3YaUw4XzjUUjiDRqG3tAPqnpvD0tVFXcBbxO+DT8Ii3CKBlRmEIQCNs14siYVYAqyk0/hrMKg35N47j7PhL2N4iiHUqdhH/owNNLajhvNaytyOxG9+qfFeEsUaQ8RQ1S1NxxBG4g/YRMYOqQdRjdlzBPnLubx3HnnlcTLSzRo+rSIjR5WlRKVotGkdWjgMB/WigYypmK+IWmjOxsqKWY8FUXJ9ggRcI3aYurU3UVXDrlsZwtasQd4IOHHjTb1Wl5WaDpMlBNcWdtarUF72qVWNRxfgCxA5ASfrQHLzF4jWmNaAtmjTNeDGIvAVEM0wWjbNAr8ZgO+atFuzqnysr06thYCsu/IABxZhYZkXU6X0u6xvkutQSj/WlycOb0qRIBB1lzqXBDAd3Ii+qcpvzvPNWndI/KcVWxG6rVZl9C9qf8AUeqAzpLH1cRVNWtUapUbazcNyqBkqjgLCRDMkxeFwz1ai0qalndgiKNpZjYD8ZVdF6itCmtjnxRHcw6aoNsjVqZCx5KGJ9JeM7wspehXR1NHYKnh1sWA1qrDz6reW3hsA5KBul4RDLEyBACZgEIQgEIQgEIQgVumMD2i6yjvL7xw8ZrdVNa1jZlN1PA8CN4Owj4GxG7Sl0vo3bUQc2H2iTcXFXhcRrDZYjJhwP2jgd8lq0q6iG4ZTZxsvsYfNblz2j2gro6TpltQuq1BmabMocX2HVvmOBGRkVbK0cVpERo6GhEoNK/TJ1xTo/paihv1aflKl+TBNT/ABBJIaQMO3aYuo+6igoryepq1aviNX5P7DKLrWmdaR9eZ14D+tMa0Z15gvAdLRJaNl4gvAWzRtmiS8aZ5Br3WJpb5Po+sQbPUHY0889apcEjmF12/ZnApvfW5prtsUuGU93Di786tQA2/ZTV+uw3TRSb+Px/H+fG4EEztnUv0INJRpDEJao4/q6sM0RhY1SDsZgbDgpPziBQ9VXV0cSy4zGIRQUhqVNhnWI2OwP9mNw870fK7vKCEIQghCEAhCEAhCEAhCEAhCECo0nom93p7d68eY5zjfXDom4pYnVvq3o1LjZc3pk8M9YeLCd6vKvTuhqGLpPSqi4dSpttsfu2g7RaRa8qUK7p5DunoMy/5TJA0niP/wBFf9/V/wBUu+mXQbFaOdiymrh792uouAOFUD82w4nI7juGrgyib/SNffiK58a1U/8AlL/oh02r4B7EmrRY3emzXYE7Xpsdjcjkbbts1W8LwPSmhNN0MZSFWhUDrsO5lNr6rqc1PIyw155p0RpSthagrUKhR9mWasPmuuxl8fVY5zq3RjrJoYi1PE2oVchcn8i5+i58g8m45EyDoGvMa8j9pMF5A+XiC8hNj02BtY8EBcjxC3t64g16jbFC83IJ9Sqc/WwhUxqkhPjC35oa30z5A5g+f6suYiDQBzclzwPkjwQZe255yXh8M9Q5DLich7YHNKvVgz1Gepji5dizH5PZmZjdjftTtJO6bl0U6qcHQYVaytWYG6irYqDuJpgAeo3m7YDR6U8/Kbid3gJYXlSsgQhCVBCEIBCEIBCEIBCESTAVMExOrC0BLVYxUxEcdJGq0TAaq4yQ6ukI7Ww5kGvhDAar6Umh9IOiuBrksqdg5z1qVgpPOn5Pssec3DEYEytxGjGgco0h0Sr0z+TZao3W7rfVbL3mU2Iwz0zZ0YW4gge3YRzE7HU0OQL7+X2cPtlPjdBOxJsf5+HhC1y0vxk/RGh8Ri21aFJnvkWtamNx1nPdHht5Gbh/8aqKboSp4jKSxT0iBZcVVAHon4rBWz9EujhweH7N69SoTnYO600y8mmAQQPjwEuvkqHagb0rufa15z/U0kduKq+xB8FiTo3GN5eIrN41Ht7LyQrolfFIg77qviQPjIL6bo7m1vAZe0zTcP0eccZcYPQji1hmfd+MQq8o6UU7pZ0NKykp6LdTZs/548ZPoYAiVF1R0heTKWMlTQwhk+jhzAsaeIj61ZDp0TJKU4D4aKiFWZZrQBz7ZkRsC8dgEIQgETFTBEDEyBACZgEwVmYQEGkI22GEfhAiPg1jBwIO6WJEwq2gVh0SOEbbQy8JcwgUZ0IvCJ/oJeEvoQKH+gl4RQ0IvCXkIFMuhl4RxNFgHnLWYIgQRgBvsfhHFwIElATMBhcMIsUhHIQMBRMwhASzWiRnFst4AQACZhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCB/9k=" alt="Card image cap"/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to="/products/single" className="btn btn-primary">ver Producto</Link>
					</div>
				</div>
			</div>
			<div className='col-sm-3'>
				<div className="card"   style={{width: "18rem"}}>
					<img className="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREBUSEhIVFRUVFRUVFRcVFRUVFRcWFRUWFxUVFRUYHSggGB0lHhUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg8NDysZFRkrKysrKzcrLS0tKy0tNys3Ky0tLTcrKysrKysrKysrKzcrKys3KysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMEBQEGBwj/xABMEAACAQICBgUHBwgIBgMAAAABAgADEQQhBRIxQVFhBgcTInEyQnKBkaGxFFJiksHR4SMzU3OCk6LwFSRDY4Oy0tMIdJSzwvEWNVT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AO4whCATCteIZopNkBUIQgEIQgEIRJMBUIi3OYq11VdZ2CgbSxAHtMByEoa/TXRqNqtj8KCNo7emSPGxyk2jpzDuuslVXU7Ct2HtECxhIQ0rR+f/AAt90cTH0j56+s2+MCTCJVwdhB8M4qATCtcXiGa8WuyBmEIQCEIQCEIkmAqEQIoGBmEIQCNs0WwyiVWAKsXCEAhCEAhCU/SLpHRwVF6tQ5ILkDjsC+JJAA4kQLWtVVFLOwVVFyzEAADaSTsE570j628FhhbDhsU1zY0yFogjcap2/sgzkPTHphitJVL1mK0gb06Km1Nc8iR57fSPqtKKk9r7wdo4/cecLHRtK9ZWOxC9p2nyelmAlIAO/C7m7C30SJz3SWMfEPr1WaoRsNR2qMB6TkknnE1apa24AWUbgIgLARaSdHaQq4Z+0o1GpsNpU2B9IHJhyIIkrQeg6+Nq9lh6esR5THJEB31H3eGZO4Gdg6K9XmGwlqlS1euM9dh3EP8Ad0zkPSNzzGyArohprEYrDh6+FqU2yGsAFSoPnojNrD2EZixO67OITfrL6SOo+sRb3yy1JjUmVQqLg95GB5qb+8SXR0hVXzrjg2fv2xmvg0bMqL8bWb1MMxG3wzDNX9TjWHqNw3tJhF1htLofLBXntH3iWaOCLggjiM5prVdX84ur9IHWT1ta48WAHOScPXZO8jbc8swfvlpG1wldgdKq/dbut7j4H7JYyoIQhAIhYuYIgJigIATMAhCEAhCEAhCEAhCUeldIaxNNDlsY8eQ5fz4gvSOlb9ymfFv9P3zjfW/pTv0cLrDZ2zLfNmJK078snPrE6U7m+oltYi+exR85vfYb7bgCRIw2EVcwLsdrGxZjxJ+zYN1hMq85UtG4h81w9d+a0KrD1aqySnR3GnZg8T68PVHxWej1EcVZaPNjaAxg24PFf9NWPwWX/Q3oHXxrlqoehRRtVyy6tVmtcoiMMsiLswtnkDu7uFkCinZ4t13V0FUfrKWrTqEnmhw9vQMDOidE0cLSFGhTCIu4bzvZic2J3k5yZqR8LM6sCPqQ1JI1ZgrAjFYgpJRWIKwIpSQ6mDtnTOodvFCfpL9osecsysbZZByPF9ZWIp1XpVMJTD03ZGXtH2qbGxtnxGWYIM2jon1u4dyKWKVqF8g7HXpjkXABA5kC3Gan1xaF7OvTxaiwrDs6n6xBdD4lAR/hTnpF/H4yj2AjhgCCCCAQQbgg7CDvip5/6rusE4Flw2JYnCsbIxz7Anf+rO8bto337+rAi4NwcwRslRmEIQCEIQCEIQCEIQCEIziq4poWO73ncIEHTON1R2anvHaeA+8ygqPawXNm8kHZltY/RFxfxA2kRytW8qo54k/gPsmcHRObt5TWuPmgeSnqub8yd1plTuFoBRbaSbsTtY7yf53AbpKVZhFjyrAFWOKsyqxwLKEhZA04NREr/oKiu24dmb06xPII7N4oJaBYVaKupRhdWBVhxDCxHsMA1Yash6BdmoKHJL0y1FydpakxQv8AtaobwYSxtAa1ZgrHrTBWAyViCsfIiSIEdljbLJJWNssDV+nmiPlWj69MC7he0p+nT7ygeNiv7U89rawPHMffPU7LPNnSjR3ybG4ihuSq2ryR7VKY9SOo9UYKts/H4zr/AFK9NSbaNxDbAfkrHgBc0D4C5XkCNwvx8xVKqysroxV0YMrDaGU3VhzBAMo9gQmu9Auky6SwSV8hUHcrKPNqqBrW5G4YcmE2KEEIQgEIQgEIRLGAqUWncRdwg2LmfE/h8ZcVGCgk3FgT7Jo2ndOUcKjV8RUCgkkDzmO3VRdpPw8JNXEsLr1Leali3N9qj1DveJSWKLIuBpWQXzJ7zHizZm3LPLlaTUEiloI8oiUEeUSoyojgEFEWBAAJlM5gxnSOPp4ag9eswSnTUsx25cABmSTYADMkgSoi4f8AJ4yom6ui1l4mpTC0q38Pyb+KWlp5o6Y9I6mksV29QaqrlQpk37JL3B4a5yLMOQ2KIrRXTHSGGt2WLq6oPk1G7ZfC1XWKj0SIHpW0xace0P1yVlsMVhkqDe9Amm37tyQfrCb1oXrD0biiFGIFJzYalcdkbnYAzdxjyVjA2YiJIjsbMBsiNsJnE1VpozuwRVF2LEBQOJJylWRVxXz6NAj6SYiqD7GoLbwqG/mWzikYrHs7tSw4DOuTu1+xpHgxHlvv7NTfZrFbgnV+lXV5SxYNQVXXE2zqsdZXtsD0xYADdqWtz37zRw6U0CU1VEUWVVAVQBuAGyJcQPMum9DV8HV7LEUyjZlTtRwPOpt5w2cxcXAlcZ6Y01omjiqRpV6YdDnY7QdzKwzVhxE4f006F1dHtrgmphybLUt3kJ2LVAyB4MMjyOUC66kdNmjpE4cnuYlCLf3tMF0I/Z7QezhPQM8v9XNBm0nQK+Z2jnkBSdR72X2z01ha2vTVuIz8d/vlNPEzCm4iC14tRlCMwhCARIipgiBQ9NdNU8Hg6larsFgFG12OxB4nL2zzVp3S9XG1Wq1jcm4VR5KKfNUcPjOnf8QWOOthMODl+VrMOY1UQ+w1JyNRC49EdEMZ2+Bw1U7Wopreko1XH1gZfIJzvqZ0hr4SpQO2jVJA+hW74P1xV9k6MgkDqCOqI2gjywFiF4Wi0WVGUWcF6z+mXy+v2NFr4Wi3dI2VqgyNW+9RsX1tncW3Drg6X9jT+QUGtVqreuw206TX7gO5nz5hb7NZTOMqN0AhMwlViBEzCBZ6E6RYvBkfJsRUpqPMuGpHl2T3UeIAPOdI0B1ssxp08ThtZqhREegwANRyFCvTqHud4gXDHbe05GRJOjq+pVpncKlNjfZ3XBB8RaB6UpaOLutbEENUXNEUnsqR4qDbXcbO0YX22CgkGeRHWEbaRDLCNOI+0aeRUZxImKoK6sjqGVgVZWAKsDkQQdok1xI9QSDSejnRCngcXXqISVdFFIHMopYmomsfKF1p2O21r32noGgqt0K/NP8Am/EGUmKFqiHiHX1nVb4IZaaBqflSOK+8EfeYF6qxUITSCEIQCEIQPP3XvVvpVV3LhaQ9Zq1yfsnPRN767v8A7dv+Xo/GpNFEK3Lqt0r2GkVUmy4hTRbhreVTY87gr/iTu6Ty3hw+unZX7TXTs7be01h2duetqz0pTXF/Ow99/cqf65BbJHllSqYv5+H/AHdX/cjipjP0mG/dVf8AdgWyyp6W9IE0fhHxD2JHdppe3aVWvqJ4ZEk7gCd0cFPGfpcN+5q/705T100cYK2HauyNQ1WWmaasiire7h1Zm7xULY32K2zO9Rz7GYp61R6tVtapUYu7Hex2+A3AbgAN0ahCVS9vj8fxiYRW3x+MBMyMv595ha33ffMGAGNYhiEYjaFJHiBHIzi/zb+i3wMD1w0baONG2kQ20ZePNGnkUw8jvJDyO8CvxvlU/TPvp1B9okvRBtXXnrD+EyJj/M/WL8DJWi/z6eJ/ymQbPCEJpBCEIBCEIHn/AK96JGlUbc2FpZ8xVrA/Z7ZzwTsf/EFo0lcLiQMlNSi/7eq6E/UcesTjghW5dVWi+30irkd3Dqap4a57lMH1lm/w53dJznqZwGpg6lc7a1UgHfqUe4B9c1fbOioZBISOrGEMeUwHlld0l0HTx2FqYarkHHdYbUdc0deYNst4uNhlgpiwZUeV9I4Gph61ShWXVqUm1XA2XyIKnepBDA7wRI4nb+tvogcVR+V0FvXor31AuatEZkADay5kcbsN4tw8G+YlUqZtb+feYDL+ffMXgK2+Px/GJhM3v4/H8YCY3XQsrKNpBA9YtHI/gE1q1JfnVaS/WqKv2wPVbRsxbmNMZEIaNNHGMacyKZeMVI85keoZBAxp71P0z/26kmaHF668tY/wmQsSb1UHBXb191R7maWfR9L1GPBfiR9xgbBCEJpBCEIBCEIFJ0y0SmLwdSjUF1IBy2gjYw5jb6p5n07oargqxpVhbIlWAOq6jzlPsuN18+fq2p3gRuItNK0zoiliFehiKYdbkWO7drKdqnmOMi4x0OwnY4DDUyLEUULAfOYaz/xMZfIZW6PqXQA7V7rAcVyyHAixHIiT0MglIY8pkZDHlMofUxwGMKYsGA+DOHda3Q75JWOLoL/V6zd9QMqNZj7kc3twY23qJ2wCIxeGStTelVQOjqVdWzBUixBlR5WhNk6Y9D62AxXYqr1adS7UGVWdmUEXRgoJ11uAeNwd5AXovq90niLEYY0lPnYhhSHrTOoPqSq1iJdgBckAcTkJ13RPU0uRxWKY7DqUFCjmDUe5I8FUzedB9DsBgyGoYZA42VHvUq+qo92HgCBIjhehehmkMZY0sMyqf7StejT8bsNZxzVWnROj3VHTpFamJxDvUUhkFEBER1IZGuwYuVIBF7A2zUzphMSzQKtNIvSYJirC5CpXUWpuTkFcf2Tk5WJ1WJFjc6osNb1RFdQwKsAVYEFSAQQciCDkQeEqTSq4bOmGq0b50r3q0h/csfLUfozmBfVOQSRVqxjLmIw2MSqgemwZTcXHFTZlI2hgQQQcwQQYOYDbmQNJY2nQptVquERBdmbYPvO4DabxjpH0goYKl2ld7XuEUZu5+ai7/HYN5E4d0t6U1tIVLv3KSm9OkDdV3azHzntv3XsLZ3DoXRTpmMdja6amonZqaIPlFUYhy+4E9opsNgG+dP6P0rUy3zj7h+N55x6u3YaUw4XzjUUjiDRqG3tAPqnpvD0tVFXcBbxO+DT8Ii3CKBlRmEIQCNs14siYVYAqyk0/hrMKg35N47j7PhL2N4iiHUqdhH/owNNLajhvNaytyOxG9+qfFeEsUaQ8RQ1S1NxxBG4g/YRMYOqQdRjdlzBPnLubx3HnnlcTLSzRo+rSIjR5WlRKVotGkdWjgMB/WigYypmK+IWmjOxsqKWY8FUXJ9ggRcI3aYurU3UVXDrlsZwtasQd4IOHHjTb1Wl5WaDpMlBNcWdtarUF72qVWNRxfgCxA5ASfrQHLzF4jWmNaAtmjTNeDGIvAVEM0wWjbNAr8ZgO+atFuzqnysr06thYCsu/IABxZhYZkXU6X0u6xvkutQSj/WlycOb0qRIBB1lzqXBDAd3Ii+qcpvzvPNWndI/KcVWxG6rVZl9C9qf8AUeqAzpLH1cRVNWtUapUbazcNyqBkqjgLCRDMkxeFwz1ai0qalndgiKNpZjYD8ZVdF6itCmtjnxRHcw6aoNsjVqZCx5KGJ9JeM7wspehXR1NHYKnh1sWA1qrDz6reW3hsA5KBul4RDLEyBACZgEIQgEIQgEIQgVumMD2i6yjvL7xw8ZrdVNa1jZlN1PA8CN4Owj4GxG7Sl0vo3bUQc2H2iTcXFXhcRrDZYjJhwP2jgd8lq0q6iG4ZTZxsvsYfNblz2j2gro6TpltQuq1BmabMocX2HVvmOBGRkVbK0cVpERo6GhEoNK/TJ1xTo/paihv1aflKl+TBNT/ABBJIaQMO3aYuo+6igoryepq1aviNX5P7DKLrWmdaR9eZ14D+tMa0Z15gvAdLRJaNl4gvAWzRtmiS8aZ5Br3WJpb5Po+sQbPUHY0889apcEjmF12/ZnApvfW5prtsUuGU93Di786tQA2/ZTV+uw3TRSb+Px/H+fG4EEztnUv0INJRpDEJao4/q6sM0RhY1SDsZgbDgpPziBQ9VXV0cSy4zGIRQUhqVNhnWI2OwP9mNw870fK7vKCEIQghCEAhCEAhCEAhCEAhCECo0nom93p7d68eY5zjfXDom4pYnVvq3o1LjZc3pk8M9YeLCd6vKvTuhqGLpPSqi4dSpttsfu2g7RaRa8qUK7p5DunoMy/5TJA0niP/wBFf9/V/wBUu+mXQbFaOdiymrh792uouAOFUD82w4nI7juGrgyib/SNffiK58a1U/8AlL/oh02r4B7EmrRY3emzXYE7Xpsdjcjkbbts1W8LwPSmhNN0MZSFWhUDrsO5lNr6rqc1PIyw155p0RpSthagrUKhR9mWasPmuuxl8fVY5zq3RjrJoYi1PE2oVchcn8i5+i58g8m45EyDoGvMa8j9pMF5A+XiC8hNj02BtY8EBcjxC3t64g16jbFC83IJ9Sqc/WwhUxqkhPjC35oa30z5A5g+f6suYiDQBzclzwPkjwQZe255yXh8M9Q5DLich7YHNKvVgz1Gepji5dizH5PZmZjdjftTtJO6bl0U6qcHQYVaytWYG6irYqDuJpgAeo3m7YDR6U8/Kbid3gJYXlSsgQhCVBCEIBCEIBCEIBCESTAVMExOrC0BLVYxUxEcdJGq0TAaq4yQ6ukI7Ww5kGvhDAar6Umh9IOiuBrksqdg5z1qVgpPOn5Pssec3DEYEytxGjGgco0h0Sr0z+TZao3W7rfVbL3mU2Iwz0zZ0YW4gge3YRzE7HU0OQL7+X2cPtlPjdBOxJsf5+HhC1y0vxk/RGh8Ri21aFJnvkWtamNx1nPdHht5Gbh/8aqKboSp4jKSxT0iBZcVVAHon4rBWz9EujhweH7N69SoTnYO600y8mmAQQPjwEuvkqHagb0rufa15z/U0kduKq+xB8FiTo3GN5eIrN41Ht7LyQrolfFIg77qviQPjIL6bo7m1vAZe0zTcP0eccZcYPQji1hmfd+MQq8o6UU7pZ0NKykp6LdTZs/548ZPoYAiVF1R0heTKWMlTQwhk+jhzAsaeIj61ZDp0TJKU4D4aKiFWZZrQBz7ZkRsC8dgEIQgETFTBEDEyBACZgEwVmYQEGkI22GEfhAiPg1jBwIO6WJEwq2gVh0SOEbbQy8JcwgUZ0IvCJ/oJeEvoQKH+gl4RQ0IvCXkIFMuhl4RxNFgHnLWYIgQRgBvsfhHFwIElATMBhcMIsUhHIQMBRMwhASzWiRnFst4AQACZhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCB/9k=" alt="Card image cap"/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to="/products/single" className="btn btn-primary">ver Producto</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
)
>>>>>>> bfb89215731bc796102fb03fe8e629686ee40859
