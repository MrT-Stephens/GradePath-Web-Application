import PocketBase from 'pocketbase';

async function getUserName(userId) {
    const pocketbase = new PocketBase('http://127.0.0.1:8090');

    const user = await pocketbase.collection('users').getOne(userId);

    return `${user.firstname} ${user.lastname}`;
}

export default async function Page({ params }) {
    const { id } = params;

    const userName = (id === 'guest') ? 'Guest' : await getUserName(id);

    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-10">
            <h1 className="text-6xl font-bold text-center">
                Hello {userName}!
            </h1>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center p-10">
                <a className="group rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-left text-4xl font-semibold">
                        View GradePath Dashboard {' '}
                        <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[50ch] text-left text-sm opacity-50 mx-auto">
                        
                    </p>
                </a>
                <a className="group rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className="mb-3 text-left text-4xl font-semibold">
                        View or Edit Grades {' '}
                        <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[50ch] text-left text-sm opacity-50 mx-auto">

                    </p>
                </a>
            </div>
        </main>
    )
}