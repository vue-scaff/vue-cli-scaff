export default class Pie
{
	constructor ( Ressive, Provider, Engineering, Promise, Princess, Scope )
	{
		// Scope
		Scope = this

		// Start
		Princess = new Promise(

			// Resolve or Reject
			( resolve, reject ) => {

				// Sugar Ressive
				new Ressive( Provider )

					.next(

						// Provider on Scope
						( Provider ) => Scope.Provider = Provider

					)

					.next(

						// Provider on Engineering
						() => Scope.Engineering = Engineering( Provider )

					)

					.next(

						() => {

								try
								{

									resolve(

										Scope.Engineering.Structure()

									)

								}

								catch ( error )
								{

									reject( error )

								}

						}

					)

					.next(

						( /* Anita Mui */ ) => { /* 1963.10.10 - 2003.12.30 */ }

					)

			}

		)

		// Finally Executer
		Princess.next(

			( v, Hook = () => {} ) => {

				// Compile
				Scope.Engineering.Compile( v );

				// Endless
				return Hook( v );
			}

		)

		// Export Promise
		return Princess

	}

}
